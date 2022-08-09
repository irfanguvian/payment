import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /example:
 *  get:
 *     security:
 *       - userAuthScheme: []
 *       - appAuthScheme: []
 *     description: example Retrieve a list of records.
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Listing page number.
 *         schema:
 *           type: integer
 *           nullable: true
 *       - in: query
 *         name: length
 *         description: Listing length.
 *         schema:
 *           type: integer
 *           nullable: true
 *       - in: query
 *         name: direction
 *         description: Listing sort direction.
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *           nullable: true
 *     responses:
 *       200:
 *         description: Retrieved list of user records.
 *     tags:
 *       - example
 */

function getListExampleRouteComposer() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.getListHandlerFcomposer;

  const routePath = "/example";
  // expressRouter.use(routePath, midlleware);
  expressRouter.get(routePath, handlerFcomposer());
  return expressRouter;
}

export default getListExampleRouteComposer;
