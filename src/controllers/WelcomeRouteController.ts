import { Request, Response } from "express";

export class WelcomeRouteController {
  async handle(req: Request, res: Response) {
    try {
      const { text } = req.body
      if (String(text).toLowerCase() !== 'sim') throw new Error("")

      return res.status(200).json({
        status: 200,
        message: "Você está mais próximo de se juntar ao time!"
      })
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: "Você precisa responder SIM para continuar..."
      })
    }
  }

}