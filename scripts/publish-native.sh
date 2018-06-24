#!/usr/bin/env bash

set -e

current_directory="$( cd "$( dirname "$0" )" && pwd )"

VERSION="1.0.0-$(git symbolic-ref --short HEAD)-SNAPSHOT"

if [ -z "$1" ]; then
  echo >&2 "Tool name was not provided."
  echo >&2 "usage: $0 <tool-name> [version (1.0.0-branch-name-SNAPSHOT)]"
  exit 1
else
  TOOL_NAME="$1"
fi

if [ -n "$2" ]; then
  VERSION="$2"
fi

echo "Building docker with version ${VERSION} for ${TOOL_NAME}"
${current_directory}/publish-native-binary.sh -n "${TOOL_NAME}" -m codacy.Engine -t docker
${current_directory}/publish-native-docker.sh "${TOOL_NAME}" "${VERSION}"
