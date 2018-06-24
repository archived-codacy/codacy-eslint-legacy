#!/usr/bin/env bash

#
# Simple Wrapper to build a native binary for your sbt application.
#
# Configuration:
# * Target:
#   * `native` - Builds the binary for the machine arch (Requires GraalVM and Oracle JDK 8)
#   * `docker` - Builds the binary for linux using a docker (Requires Docker)
#
# Setup GraalVM
#   * Install GraalVM (https://www.graalvm.org/docs/getting-started/).
#   * Add GraalVM to your PATH.
#
# Example:
# ./scripts/publish-native.sh -n codacy-eslint -m codacy.Engine -t docker
#

set -e

TARGET="docker"
OS_TARGET="$(uname | awk '{print tolower($0)}')"

function usage() {
  echo >&2 "Usage: $0 -n <app-name> -m <main-class> [-t target (native)]"
}

while getopts :s:t:n:m:h opt
do
  case "$opt" in
    t)
      TARGET="$OPTARG"

      if [[ "${TARGET}" == "docker" && "${OS_TARGET}" == "darwin" ]]
      then
        echo >&2 "Target docker can only build binaries for linux."
        OS_TARGET="linux"
      fi
      ;;
    n)
      APP_NAME="$OPTARG"
      ;;
    m)
      APP_MAIN_CLASS="$OPTARG"
      ;;
    h | ?)
      usage
      exit 0
      ;;
    *)
      usage
      exit 1
      ;;
	esac
done

shift $((OPTIND-1))

if [ -z "$APP_NAME" ]; then
  echo >&2 "App name was not provided."
  usage
  exit 1
fi

if [ -z "$APP_MAIN_CLASS" ]; then
  echo >&2 "Main class was not provided."
  usage
  exit 1
fi

function app_classpath() {
  echo $(cat /dev/null | sbt 'export runtime:fullClasspath' | tail -n 1)
}

function build_cmd() {
  local BINARY_NAME=$1
  local APP_MAIN_CLASS=$2
  local APP_CLASSPATH=$3
  local FLAGS="--static -O1"
  local NATIVE_IMAGE_FLAGS="-H:+JNI -H:IncludeResourceBundles=com.sun.org.apache.xerces.internal.impl.msg.XMLMessages"

  if [[ "${OS_TARGET}" == "darwin" ]]
  then
    FLAGS="-O1"
  fi

  echo 'native-image -cp '"${APP_CLASSPATH}"' '"${FLAGS}"' '"${NATIVE_IMAGE_FLAGS}"' -H:Name='"${BINARY_NAME}"' -H:Class='"${APP_MAIN_CLASS}"
}

echo "Publishing ${APP_NAME} for ${OS_TARGET}"
BINARY_NAME="${APP_NAME}-${OS_TARGET}"
BUILD_CMD="$(build_cmd ${BINARY_NAME} "${APP_MAIN_CLASS}" "$(app_classpath)")"

echo "Going to run ${BUILD_CMD} ..."
mkdir -p build
case "$TARGET" in
  native)
    ${BUILD_CMD} && mv ${BINARY_NAME} build/
    ;;
  docker)
    docker run \
      --rm=true \
      -it \
      -e JAVA_TOOL_OPTIONS="${JAVA_TOOL_OPTIONS}" \
      --user=root \
      --entrypoint=bash \
      -v $HOME/.ivy2:$HOME/.ivy2 \
      -v $PWD:$PWD \
      findepi/graalvm:1.0.0-rc2-all \
        -c 'cd /tmp && '"${BUILD_CMD}"' && mv '"$BINARY_NAME $PWD/build/$BINARY_NAME"
    ;;
  *)
    echo >&2 "Could not find command for target $TARGET"
    exit 1
    ;;
esac
