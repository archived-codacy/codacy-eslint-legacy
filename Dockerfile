ARG NODE_IMAGE_VERSION=13.1.0-alpine

FROM node:$NODE_IMAGE_VERSION as builder

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run compile

RUN node dist/src/docGeneratorMain.js

RUN npm test

FROM node:$NODE_IMAGE_VERSION

COPY --from=builder dist dist
COPY package*.json ./
COPY docs /docs

RUN npm install --production

COPY docs /docs

RUN adduser -u 2004 -D docker
RUN chown -R docker:docker /docs

CMD ["node", "dist/src/index.js"]
