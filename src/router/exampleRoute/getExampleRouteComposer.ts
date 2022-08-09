import express from "express";
import handlerFComposerHash from "../../handler";
/**
 * @openapi
 * /example/{id}:
 *  get:
 *     security:
 *       - userAuthScheme: []
 *       - appAuthScheme: []
 *     description: example Retrieve a record.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of the user to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved record.
 *     tags:
 *       - example
 */
function getExampleRouterComposer() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.getHandlerFcomposer;

  const routerPath = "/example/:id";
  //   expressRouter.use(routerPath, middlewareHash);
  expressRouter.get(
    routerPath,
    handlerFcomposer(),
  );
  return expressRouter;
}

export default getExampleRouterComposer;
