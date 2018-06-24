FROM library/openjdk:8-jre-alpine

RUN adduser -u 2004 -D docker
WORKDIR /opt/docker

ADD --chown=docker:docker "target/docker/stage/opt/docker" "/tool"
ADD --chown=docker:docker package.json /js/package.json
ADD --chown=docker:docker yarn.lock /js/yarn.lock
ADD --chown=docker:docker src/main/resources/docs /docs

RUN \
  apk add --update bash nodejs-npm yarn && \
  cd /js && yarn install --production --cache-folder /tmp/yarn-cache && \
  rm -rf /tmp/yarn-cache

ENV NODE_PATH /js/node_modules
ENV PATH "/js/node_modules/.bin:$PATH"

USER docker
ENTRYPOINT ["/tool/bin/codacy-eslint"]
CMD []
