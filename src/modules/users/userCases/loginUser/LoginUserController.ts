import { Request, Response } from "express";
import { LoginUserCase } from "./LoginUserCase";
import { logger } from "../../../../utils/logger";


class LoginUserController {
   private loginUserCase: LoginUserCase;

   constructor (loginUserCase: LoginUserCase) {
    this.loginUserCase = loginUserCase;
   }

   async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
        const tokenResult = await this.loginUserCase.execute({ email, password });

        return response.json({
            sucess: true,
            tokenResult
        })
    } catch (error) {
        logger.error(error);
        return response.status(401).json({
            sucess: false
        })
    }

   }
    
}

export { LoginUserController }