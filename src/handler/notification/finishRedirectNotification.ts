import { Request, Response } from "express";
import { isNil } from "lodash";
import models from "../../models";

async function finishRedirectNotification(req: Request, res: Response) {
  const body = req.body;
  let status = false;
  let msg = "Error";
  let statusCode = 500;
  const data = body;

  try {
    const getOrder = await models.order.findOne({
      where: {
        orderNumber: body.order_id,
      },
    });

    if (!isNil(getOrder)) {

      getOrder.orderStatus = 2; // finish
      getOrder.paidDate = body.settlement_time;

      const bodyString = JSON.stringify(body);
      getOrder.paymentCallback = bodyString;

      await getOrder.save();
      status = true;
      msg = "error Accepted";
      statusCode = 200;
    }

    // transaction_status
    // transaction_time
    // fraud_status , accept, deny,challenge
    // settlement_time
    // order_id

    // done : [settlement, capture]
    // pending
    // deny
    // cancel
    // expire
    // refund
    // partial_refund

    // status_code

  } catch (e) {
    status = false;
    msg = "Terjadi kesalahan silahkan coba beberapa saat lagi";
  }

  return res.status(statusCode).json({
    status: status,
    msg: msg,
    data: data,
  });
}

export default finishRedirectNotification;
