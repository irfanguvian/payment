import snapTransactionRoute from "./snapTransactionRoute";
import express from "express";

function midtransRouterComposer() {

  const expressRouter = express.Router();
  expressRouter.use(snapTransactionRoute());

  return expressRouter;
}

export default midtransRouterComposer;
