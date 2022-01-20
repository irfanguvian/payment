import { Request, Response } from "express";

function postExampleHandlerFcomposer(diHash : any) {
  async function postExampleHandler(req: Request, res: Response) {
    try {
      res.send("Hellow World");
    } catch (error : any) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
  return postExampleHandler;
}

export default postExampleHandlerFcomposer;
