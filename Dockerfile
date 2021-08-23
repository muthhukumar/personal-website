# base node image
FROM node:16-slim as base

ARG REMIX_TOKEN
ENV REMIX_TOKEN=${REMIX_TOKEN}

# install all node_modules, including dev
FROM base as deps

RUN mkdir /app/
WORKDIR /app/

ADD package.json package-lock.json .npmrc ./
RUN npm install --production=false

# setup production node_modules
FROM base as production-deps

ARG REMIX_TOKEN
ENV REMIX_TOKEN=${REMIX_TOKEN}

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json .npmrc /app/
RUN npm prune --production

# build app
FROM base as build

ARG REMIX_TOKEN
ENV REMIX_TOKEN=${REMIX_TOKEN}

RUN mkdir /app/
WORKDIR /app/

COPY --from=deps /app/node_modules /app/node_modules

# app code changes all the time
ADD . .
RUN npm run build

# build smaller image for running
FROM base

ENV NODE_ENV=production

RUN mkdir /app/
WORKDIR /app/

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/server/build /app/server/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["npm", "run", "start"]