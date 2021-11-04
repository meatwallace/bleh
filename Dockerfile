FROM mhart/alpine-node:16.4.2 as runner

WORKDIR /app

# pull everything in
COPY . .
