import { Request, Response } from "express";

function getExampleListHandlerFcomposer(diHash : any) {
  async function getExampleListHandler(req: Request, res: Response) {
    try {
      res.send("Hellow World");
    } catch (error : any) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
  return getExampleListHandler;
}

export default getExampleListHandlerFcomposer;
