const fastify = require("fastify")({ logger: true });
const path = require("path");

const PUBLIC_PATH = path.join(__dirname, "..", "public");

// serve assets
fastify.register(require("fastify-static"), {
  root: path.join(PUBLIC_PATH, "assets"),
  prefix: "/assets/",
});

// redirect everything else to our index file
fastify.get("*", (request, reply) => {
  return reply.sendFile("index.html", PUBLIC_PATH);
});

const start = async () => {
  try {
    // TODO: pull port from env
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);

    process.exit(1);
  }
};

start();
