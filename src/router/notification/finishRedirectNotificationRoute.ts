import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /notification/finish:
 *  post:
 *     description: Finish Notification Midtrans
 *     responses:
 *       200:
 *         description: Finish Notification Midtrans
 *     tags:
 *       - notification
 */
function finishRedirectNotificationRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.finishRedirectNotification;

  const routerPath = "/notification/finish";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default finishRedirectNotificationRoute;

