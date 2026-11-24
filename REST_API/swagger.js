const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Student REST API",
      version: "1.0.0",
      description: "REST API for managing students"
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server"
      },
      {
        url: "https://rest-api-project-nu4q.onrender.com",
        description: "Render production server"
      }
    ]
  },

  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;