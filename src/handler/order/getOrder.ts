import { Request, Response } from "express";
import { isEmpty, isNil } from "lodash";
import models from "../../models";

async function getOrder(req: Request, res: Response) {

  let status = false;
  let msg = "Error";
  let statusCode = 500;
  let data : any = {};

  try {

    const { orderNumber } = req.params;

    const orderOne = await models.order.findOne({
      where: {
        orderNumber: orderNumber,
      },
    });

    if (!isNil(orderOne) && !isEmpty(orderOne)) {
      data = orderOne;

      status = true;
      msg = "get order";
      statusCode = 200;
    }

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

export default getOrder;
