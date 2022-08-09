import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /notification/error:
 *  post:
 *     description: Error Notification Midtrans
 *     responses:
 *       200:
 *         description: Error Notification Midtrans
 *     tags:
 *       - notification
 */
function errorRedirectNotificationRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.errorRedirectNotification;

  const routerPath = "/notification/error";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default errorRedirectNotificationRoute;

