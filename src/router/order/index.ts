import createOrderRoute from "./createOrderRoute";
import getOrderRoute from "./getOrderRoute";
import getAllOrderRoute from "./getAllOrderRoute";
import express from "express";

function orderRouterComposer() {

  const expressRouter = express.Router();
  expressRouter.use(createOrderRoute());
  expressRouter.use(getOrderRoute());
  expressRouter.use(getAllOrderRoute());

  return expressRouter;
}

export default orderRouterComposer;
