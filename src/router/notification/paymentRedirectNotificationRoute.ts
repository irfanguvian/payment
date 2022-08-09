import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /notification/payment:
 *  post:
 *     description: Payment Notification Midtrans
 *     responses:
 *       200:
 *         description: Payment Notification Midtrans
 *     tags:
 *       - notification
 */
function paymentRedirectNotificationRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.paymentNotification;

  const routerPath = "/notification/payment";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default paymentRedirectNotificationRoute;

