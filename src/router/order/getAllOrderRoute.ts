import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /order:
 *  get:
 *     description: get all order
 *     parameters:
 *       - in: query
 *         name: userId
 *         description: userId.
 *         schema:
 *           type: integer
 *           nullable: true
 *       - in: query
 *         name: orderNumber
 *         description: order number of order.
 *         schema:
 *           type: string
 *           nullable: true
 *     responses:
 *       200:
 *         description: created new order
 *     tags:
 *       - order

 */
function getAllOrderRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.getAllOrder;

  const routerPath = "/order";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default getAllOrderRoute;

