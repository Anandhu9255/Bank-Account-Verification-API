import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bank Account Verification API",
      version: "1.0.0",
      description: "API to verify bank account details",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // Where your route/controller JSDoc is
};

export const swaggerSpec = swaggerJsdoc(options);
