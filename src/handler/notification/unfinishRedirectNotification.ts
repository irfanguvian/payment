import { Request, Response } from "express";
import { isNil } from "lodash";
import models from "../../models";

async function unfinishRedirectNotification(req: Request, res: Response) {
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

      getOrder.orderStatus = 4; // finishing your payment

      const bodyString = JSON.stringify(body);
      getOrder.paymentCallback = bodyString;

      await getOrder.save();
      status = true;
      msg = "unfinsihed callbakcs Accepted";
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

export default unfinishRedirectNotification;
