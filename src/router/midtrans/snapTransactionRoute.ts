import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /snap:
 *  post:
 *     description: Snap Transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/snapTransactionPayload'
 *     responses:
 *       200:
 *         description: Snap Transaction
 *     tags:
 *       - midtrans
 * components:
 *   schemas:
 *     snapTransactionPayload:
 *       type: object
 *       properties:
 *         orderNumber:
 *           description: OrderNumber
 *           type: string
 */
function snapTransactionRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.snapTransaction;

  const routerPath = "/snap";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default snapTransactionRoute;

