import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /example/post:
 *  post:
 *     description: example Post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/postExamplePayload'
 *     responses:
 *       200:
 *         description: example posted
 *     tags:
 *       - example
 *
 * components:
 *   schemas:
 *     postExamplePayload:
 *       type: object
 *       properties:
 *         username:
 *           description: Username of user
 *           type: string
 *         password:
 *           description: Password of user
 *           type: string
 *       required:
 *         - username
 *         - password
 */
function postUserAuthRouterComposer() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.postHandlerFcomposer;

  const routerPath = "/example/post";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer());

  return expressRouter;
}

export default postUserAuthRouterComposer;

