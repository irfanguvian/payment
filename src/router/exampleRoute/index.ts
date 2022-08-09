import getListExampleRouteComposer from "./getListExampleRouteComposer";
import getExampleRouterComposer from "./getExampleRouteComposer";
import postUserAuthRouterComposer from "./postExampleRouteComposer";
import express from "express";

function exampleRouterFcomposer() {

  const expressRouter = express.Router();
  expressRouter.use(getListExampleRouteComposer());
  expressRouter.use(getExampleRouterComposer());
  expressRouter.use(postUserAuthRouterComposer());

  return expressRouter;
}

export default exampleRouterFcomposer;
