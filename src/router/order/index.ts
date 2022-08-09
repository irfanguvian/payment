import createOrderRoute from "./createOrderRoute";
import express from "express";

function orderRouterComposer() {

  const expressRouter = express.Router();
  expressRouter.use(createOrderRoute());

  return expressRouter;
}

export default orderRouterComposer;
