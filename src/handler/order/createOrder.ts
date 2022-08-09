import { Request, Response } from "express";
import moment from "moment-timezone";
import * as lodash from "lodash";
import models from "../../models";

async function createOrder(req: Request, res: Response) {
  let status = true;
  let msg = "Successfully created order";
  const body = req.body;
  let data : any = {};
  const argsOrderInput = {
    userId: 0,
    orderNumber: `TIMTI-${moment().format("DDMMYYYY")}`,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    type: "",
    orderStatus: 1,
    paymentType: 1,
    expiredDate: moment().add(15, "minutes").format("YYYY-MM-DD hh:mm:ss"),
    paidDate: null,
    amount: 0,
    discountPercentage: 0,
    discountAmount: 0,
    transactionFee: 0,
    finalAmount: 0,
  };
  try {
    // http://timti-api/payment/create-order

    // cek typenya dulu buat dapet transaction fee
    // final amount dari kita

    if (!lodash.isNil(body?.userId) && lodash.isEmpty(body?.userId)) argsOrderInput.userId = body?.userId;
    if (!lodash.isNil(body.firstName) && lodash.isEmpty(body.firstName)) argsOrderInput.firstName = body.firstName;
    if (!lodash.isNil(body.lastName) && lodash.isEmpty(body.lastName)) argsOrderInput.lastName = body.lastName;
    if (!lodash.isNil(body.email) && lodash.isEmpty(body.email)) argsOrderInput.email = body.email;
    if (!lodash.isNil(body.phone) && lodash.isEmpty(body.phone)) argsOrderInput.phone = body.phone;
    if (!lodash.isNil(body.address) && lodash.isEmpty(body.address)) argsOrderInput.address = body.address;
    if (!lodash.isNil(body.type) && lodash.isEmpty(body.type)) argsOrderInput.type = body.type;
    if (!lodash.isNil(body.amount) && lodash.isEmpty(body.amount)) argsOrderInput.amount = body.amount;
    if (!lodash.isNil(body.discountPercentage) && lodash.isEmpty(body.discountPercentage)) argsOrderInput.discountPercentage = body.discountPercentage;
    if (!lodash.isNil(body.transactionFee) && lodash.isEmpty(body.transactionFee)) argsOrderInput.transactionFee = body.transactionFee;

    argsOrderInput.finalAmount = argsOrderInput.amount;

    data = await models.order.create(argsOrderInput);

    const argsLogEvent = {
      userId: 0,
      event: `CREATED ORDER ${argsOrderInput.orderNumber}`,
      refType: "ORDER",
      refId: argsOrderInput.orderNumber,
    };

    await models.logEvent.create(argsLogEvent);

  } catch (error : any) {
    status = false;
    msg = "Error ";

    const argsLogEvent = {
      userId: 0,
      event: error.message,
      refType: "ORDER",
      refId: argsOrderInput.orderNumber,
    };

    await models.logEvent.create(argsLogEvent);
  }

  return res.status(200).json({
    status: status,
    msg: msg,
    data: data,
  });
}
export default createOrder;
