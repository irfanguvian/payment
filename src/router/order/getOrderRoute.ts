import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /order/:orderNumber:
 *  get:
 *     description: get one order
 *     parameters:
 *       - in: path
 *         name: orderNumber
 *         description: orderNumber of order.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: get order
 *     tags:
 *       - order
 */
function getOrderRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.getOrder;

  const routerPath = "/order/:orderNumber";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default getOrderRoute;

