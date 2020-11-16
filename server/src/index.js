const routes = require("./routes");

// Import Swagger Options
const swagger = require("./config/swagger");

// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

// Require external modules
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/qbquity-invoice")
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
