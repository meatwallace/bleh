FROM mhart/alpine-node:16.4.2 as build

WORKDIR /app

COPY . .

RUN \
  yarn install --immutable --immutable-cache && \
  # copy service files to the root of the repo
  mv apps/web/* . && \
  # clean up anything we don't need
  rm -rf apps packages services && \
  # clean up the PnP map as we need to regenerate it
  rm -rf .pnp.js && \
  # regenerate the PnP map for just this service
  yarn

FROM mhart/alpine-node:16.4.2

WORKDIR /app

COPY --from=build /app ./

CMD ["yarn", "node", "index.js"]