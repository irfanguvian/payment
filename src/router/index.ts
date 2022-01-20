// import goes here
import exampleRouteFcomposer from "./exampleRoute";

/**
 * @openapi
 * components:
 *   securitySchemes:
 *      appAuthScheme:
 *        type: apiKey
 *        in: header
 *        name: x-api-key
 *      userAuthScheme:
 *        type: http
 *        scheme: bearer
 */

function routerFcomposer(diHash : any) {
  const {
    express,
  } = diHash;

  const expressRouter = express.Router();

  // example
  const exampleRoute = exampleRouteFcomposer(diHash);
  expressRouter.use(exampleRoute);

  return expressRouter;
}

export default routerFcomposer;
