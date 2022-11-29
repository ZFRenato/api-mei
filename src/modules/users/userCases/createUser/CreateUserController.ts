
import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";

class CreateUserController {
    private createUserCase: CreateUserCase;

    constructor(createUserCase: CreateUserCase) {
        this.createUserCase = createUserCase;
    }

    async handle (request: Request, response: Response): Promise<Response> {
        const { name, phone, email, type, password } = request.body;
        try {
            const newUser = await this.createUserCase.execute({ name, phone, email, type, password });
            return response.status(201).json({
                user: newUser
            })
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    }
}

export {
    CreateUserController
}

