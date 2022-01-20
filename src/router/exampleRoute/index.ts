import getListExampleRouteComposer from "./getListExampleRouteComposer";
import getExampleRouterComposer from "./getExampleRouteComposer";
import postUserAuthRouterComposer from "./postExampleRouteComposer";

function exampleRouterFcomposer(diHash : any) {
  const {
    express,
  } = diHash;

  const expressRouter = express.Router();
  expressRouter.use(getListExampleRouteComposer(diHash));
  expressRouter.use(getExampleRouterComposer(diHash));
  expressRouter.use(postUserAuthRouterComposer(diHash));

  return expressRouter;
}

export default exampleRouterFcomposer;
