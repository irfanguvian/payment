import { Request, Response } from "express";

function getExampleHandlerFcomposer(diHash : any) {
  async function getExampleHandler(req: Request, res: Response) {
    try {
      res.send("Hellow World");
    } catch (error : any) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
  return getExampleHandler;
}

export default getExampleHandlerFcomposer;
