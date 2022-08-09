// import goes here
import exampleRouteFcomposer from "./exampleRoute";
import midtransRouterComposer from "./midtrans";
import notificationRouterComposer from "./notification";
import orderRouterComposer from "./order";
import express from "express";
/**
 * @openapi
 * components:
 *   securitySchemes:
 *      appAuthScheme:
 *        type: apiKey
 *        in: header
 *        name: x-api-key
 *      userAuthScheme:
 *        type: http
 *        scheme: bearer
 */

function routerFcomposer() {

  const expressRouter = express.Router();

  // example
  const exampleRoute = exampleRouteFcomposer();
  expressRouter.use(exampleRoute);

  const midtransRoute = midtransRouterComposer();
  expressRouter.use(midtransRoute);

  const notificationRoute = notificationRouterComposer();
  expressRouter.use(notificationRoute);

  const orderRoute = orderRouterComposer();
  expressRouter.use(orderRoute);

  return expressRouter;
}

export default routerFcomposer;
