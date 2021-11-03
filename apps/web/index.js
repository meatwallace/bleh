const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return { hello: "app" };
});

fastify.get("/healthz", async (request, reply) => {
  return {};
});

const start = async () => {
  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
