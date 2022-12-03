
import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";
import { logger } from "../../../../utils/logger";
import { SendMail } from "../../../../utils/sendEmailGrid";

class CreateUserController {
    private createUserCase: CreateUserCase;

    constructor(createUserCase: CreateUserCase) {
        this.createUserCase = createUserCase;
    }

    async handle (request: Request, response: Response): Promise<Response> {
        const { name, phone, email, type, password } = request.body;
        try {
            const newUser = await this.createUserCase.execute({ name, phone, email, type, password });
            const sendMail = new SendMail(newUser.email);
            await sendMail.emailConfirmation(newUser.id);

            logger.info(newUser);
            return response.status(201).json({
                user: newUser
            })
        } catch (error) {
            logger.error(error);
            return response.status(500).json({
                error: error.message
            })
        }
    }
}

export {
    CreateUserController
}

