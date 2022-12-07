import { Request, Response } from "express";

import { logger } from "../../../../utils/logger";
import { SendMail } from "../../../../utils/sendEmailGrid";
import { PreRegisterUserCase } from "./PreRegisterUserCase";

class PreRegisterUserController {
  private preRegisterUserCase: PreRegisterUserCase;

  constructor(preRegisterUSerCase: PreRegisterUserCase) {
    this.preRegisterUserCase = preRegisterUSerCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, phone, email, type, password } = request.body;

    try {
      const result = await this.preRegisterUserCase.execute({
        name,
        phone,
        email,
        type,
        password,
      });
      const sendMail = new SendMail(email);
      await sendMail.emailConfirmation(result.id);

      return response.status(201).json({
        status: "Aguardando confirmação de email",
        data: result,
      });
    } catch (error) {
      logger.error(error);
      return response.status(500).json({
        error:
          error.message == "Email Already registration"
            ? error.message
            : "registration process failed",
      });
    }
  }
}

export { PreRegisterUserController };
