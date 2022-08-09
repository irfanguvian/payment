import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /notification/unfinished:
 *  post:
 *     description: Unfinished Notification Midtrans
 *     responses:
 *       200:
 *         description: Unfinished Notification Midtrans
 *     tags:
 *       - notification
 */
function unfinishRedirectNotificationRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.unfinishRedirectNotification;

  const routerPath = "/notification/unfinish";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default unfinishRedirectNotificationRoute;

