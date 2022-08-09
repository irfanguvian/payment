import { Request, Response } from "express";

async function errorRedirectNotification(req: Request, res: Response) {
  const body = req.body;
  let status = true;
  let msg = "Successfully get snap";
  const data = body;
  console.log(body);
  try {
    return {
      status: status,
      msg: msg,
      data: data,
    };
  } catch (e) {
    console.log(e);
    status = false;
    msg = "Terjadi kesalahan silahkan coba beberapa saat lagi";
  }

  return res.status(200).json({
    status: status,
    msg: msg,
    data: data,
  });
}

export default errorRedirectNotification;
