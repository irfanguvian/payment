import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /snap:
 *  post:
 *     description: Snap Transaction
 *     responses:
 *       200:
 *         description: Snap Transaction
 *     tags:
 *       - midtrans
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

