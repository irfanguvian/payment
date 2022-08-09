// external dependencies
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUiExpress from "swagger-ui-express";
import { version } from "../package.json";
// internal dependencies
import routerFcomposer from "./router";

// app registration
// const env = {
//   APP_ENV: process.env.APP_ENV,
//   APP_VERSION: process.env.APP_VERSION,
// };
const app = express();

const router = routerFcomposer();
app.use("/v1", router);
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Error handler registration
// --------------------------
app.use((err: any, req : Request, res: Response, next :NextFunction) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message,
  });
});

// swager regis
const swaggerJsdocOptions : swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "str-backend",
      version,
      // version: env.APP_VERSION,
    },
    servers: [
      { url: "/v1" },
    ],
  },
  apis: [
    // "./app/lib/*.js",
    "./src/router/*.ts",
    "./src/router/**/*.ts",
  ],
};

const swaggerUiExpressOption = {
  swaggerOptions: {
    operationsSorter: "alpha",
    tagsSorter: "alpha",
  },
};

const swaggerSpec = swaggerJSDoc(swaggerJsdocOptions);

app.use("/docs", SwaggerUiExpress.serve, SwaggerUiExpress.setup(swaggerSpec, swaggerUiExpressOption));
app.get("/docs.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerJsdocOptions);
});

export default app;
