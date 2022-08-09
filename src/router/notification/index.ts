import errorRedirectNotificationRoute from "./errorRedirectNotificationRoute";
import finishRedirectNotificationRoute from "./finishRedirectNotificationRoute";
import paymentRedirectNotificationRoute from "./paymentRedirectNotificationRoute";
import unfinishRedirectNotificationRoute from "./unfinishRedirectNotificationRoute";
import express from "express";

function notificationRouterComposer() {

  const expressRouter = express.Router();
  expressRouter.use(errorRedirectNotificationRoute());
  expressRouter.use(finishRedirectNotificationRoute());
  expressRouter.use(paymentRedirectNotificationRoute());
  expressRouter.use(unfinishRedirectNotificationRoute());

  return expressRouter;
}

export default notificationRouterComposer;
