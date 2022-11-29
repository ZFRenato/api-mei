import { Request, Response } from "express";
import { ListUsersCase } from "./ListUsersCase";

class ListUsersController {
    private listUsersCase: ListUsersCase

    constructor(listUsersCase: ListUsersCase) {
        this.listUsersCase = listUsersCase;
    }

    async handle (request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.listUsersCase.execute();
            return response.status(200).json({
                users
            })
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    }
}

export {
    ListUsersController
}