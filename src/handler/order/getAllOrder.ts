import { Request, Response } from "express";
import { isEmpty, isNil } from "lodash";
import models from "../../models";

async function getAllOrder(req: Request, res: Response) {

  let status = false;
  let msg = "Error";
  let statusCode = 500;
  let data : any = {};

  try {

    const query = req.query;
    const getKey = Object.keys(query);
    const whereParams : any = {};
    getKey.forEach((key) => {
      if (!isNil(query[key]) && !isEmpty(query[key])) {
        whereParams[key] = query[key];
      }
    });

    const allOrder = await models.order.findAll({
      where: whereParams,
    });

    if (!isNil(allOrder) && !isEmpty(allOrder)) {
      data = allOrder;

      status = true;
      msg = "get all order";
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

export default getAllOrder;
