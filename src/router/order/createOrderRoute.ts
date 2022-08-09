import express from "express";
import handlerFComposerHash from "../../handler";

/**
 * @openapi
 * /order:
 *  post:
 *     description: Create new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createOrderPayload'
 *     responses:
 *       200:
 *         description: created new order
 *     tags:
 *       - order
 * components:
 *   schemas:
 *     createOrderPayload:
 *       type: object
 *       properties:
 *         userId:
 *           description: Id of user
 *           type: string
 *         firstName:
 *           description: firstName of user
 *           type: string
 *         lastName:
 *           description: lastName of user
 *           type: string
 *         email:
 *           description: email of user
 *           type: string
 *         phone:
 *           description: phone of user
 *           type: string
 *         address:
 *           description: address of user
 *           type: string
 *         type:
 *           description: type of payment
 *           type: string
 *         amount:
 *           description: amount of order
 *           type: string
 *         discountPercentage:
 *           description: discountPercentage of product
 *           type: string
 *         transactionFee:
 *           description: transactionFee of payment
 *           type: string
 */
function createOrderRoute() {

  const expressRouter = express.Router();
  const handlerFcomposer = handlerFComposerHash.createOrder;

  const routerPath = "/order";
  // expressRouter.use(routerPath, middlewareHash.standardMiddlewareList);
  expressRouter.post(routerPath, handlerFcomposer);

  return expressRouter;
}

export default createOrderRoute;

