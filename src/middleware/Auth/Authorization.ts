import { Request, Response } from "express";

function AuthorizationHandler(diHash : any) {
  async function Authorization(req: Request, res: Response) {
    try {
      res.send("Hellow World");
    } catch (error : any) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
  return Authorization;
}

export default AuthorizationHandler;
