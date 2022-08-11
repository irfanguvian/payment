import { Request, Response } from "express";
import models from "../../models";
import Axios from "axios";
// import moment from "moment-timezone";
import { orderType } from "../../models/order";
import lodash from "lodash";

async function snapTransaction(req: Request, res: Response) {
  const validBody = {
    "transaction_details": {
      "order_id": "",
      "gross_amount": 0,
    },
    "customer_details": {
      "first_name": "TEST",
      "last_name": "MIDTRANSER",
      "email": "test@midtrans.com",
      "phone": "+628123456",
      "billing_address": {
        "first_name": "TEST",
        "last_name": "MIDTRANSER",
        "email": "test@midtrans.com",
        "phone": "081 2233 44-55",
        "address": "Sudirman",
        "city": "Jakarta",
        "postal_code": "12190",
        "country_code": "IDN",
      },
    },
    "enabled_payments": [
      "cimb_clicks",
      "bca_klikbca",
      "bca_klikpay",
      "bri_epay",
      "echannel",
      "permata_va",
      "bca_va",
      "bni_va",
      "bri_va",
      "other_va",
      "gopay",
      "indomaret",
      "danamon_online",
      "akulaku",
      "shopeepay",
      "kredivo",
      "uob_ezpay"],
    "bca_va": {
      "va_number": "12345678911",
      "sub_company_code": "00000",
      "free_text": {
        "inquiry": [
          {
            "en": "text in English",
            "id": "text in Bahasa Indonesia",
          },
        ],
        "payment": [
          {
            "en": "text in English",
            "id": "text in Bahasa Indonesia",
          },
        ],
      },
    },
    "bni_va": {
      "va_number": "12345678",
    },
    "bri_va": {
      "va_number": "1234567891234",
    },
    "permata_va": {
      "va_number": "1234567890",
      "recipient_name": "SUDARSONO",
    },
    "shopeepay": {
      "callback_url": "http://shopeepay.com",
    },
    "gopay": {
      "enable_callback": true,
      "callback_url": "http://gopay.com",
    },
    "callbacks": {
      "finish": "http://localhost:8080",
    },
  };
  let status = true;
  let msg = "Successfully get snap";
  const data = {
    token: "",
    redirect_url: "",
  };
  try {
    // http://timti-api/payment/transaction
    const orderNumber = req.body.orderNumber;

    // orderNumber;
    const url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
    // const merchantId = "G885028912";
    // const clientKey = "SB-Mid-client-3rK4xma2O92-ZUId";

    const serverKey = "SB-Mid-server-cRMF3qOqNFbJe-kAcOZPeYMk";
    const authorization = Buffer.from(`${serverKey}:`).toString("base64");

    // get order and order detail

    const getOrder : orderType = await models.order.findOne({
      where: {
        orderNumber: orderNumber,
      },
      raw: true,
    }).then(async (order : orderType) => {
      if (!lodash.isNil(order)) {
        order.detail = {};
        const getOrderDetail = await models.orderDetail.findAll({
          where: {
            id: order.id,
          },
        });

        if (getOrderDetail.length > 0) {
          order.detail = getOrderDetail;
        }
      }

      return order;
    });
    if (lodash.isNil(getOrder)) {
      status = false;
      msg = "Order not found";
    }
    validBody.transaction_details.order_id = getOrder.orderNumber;
    validBody.transaction_details.gross_amount = getOrder.finalAmount;

    await Axios.post(url, validBody, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Basic ${authorization}`,
      },
    }).then((resp) => {
      if (!lodash.isNil(resp.data)) {
        data.token = resp.data.token;
        data.redirect_url = resp.data.redirect_url;
      }
    }).catch((err) => {
      status = false;
      msg = "Terjadi kesalahan silahkan coba beberapa saat lagi";
      console.log(err.data, "catch");
    });

  } catch (error : any) {
    status = false;
    msg = "Terjadi kesalahan silahkan coba beberapa saat lagi";
  }

  return res.status(200).json({
    status: status,
    msg: msg,
    data: data,
  });
}

export default snapTransaction;

// //Name of the file : sha512-hash.js
// //Loading the crypto module in node.js
// var crypto = require('crypto');
// //creating hash object
// var hash = crypto.createHash('sha512');
// //passing the data to be hashed
// data = hash.update('nodejsera', 'utf-8');
// //Creating the hash in the required format
// gen_hash= data.digest('hex');
// //Printing the output on the console
// console.log("hash : " + gen_hash);
