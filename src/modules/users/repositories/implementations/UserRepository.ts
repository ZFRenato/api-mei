import { PrismaClient } from "@prisma/client";
import { IUser } from "modules/users/entities/IUser";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {
    private repository: PrismaClient

    constructor(repository: PrismaClient) {
        this.repository = repository
    }

    async create(user: IUser): Promise<IUser> {
        const result = await this.repository.user.create({
            data: user
        })

        return result;
    }

    async listAll(): Promise<IUser[]> {
        const result = await this.repository.user.findMany();
        return result;
    }

    async findById(id: string): Promise<IUser> {
        const result = await this.repository.user.findUnique({
            where: {
                id
            }
        });
        return result;
    }

    async findByEmail(email: string): Promise<IUser> {
        const result = await this.repository.user.findUnique({
            where: {
                email
            }
        });
        return result;
    }

    async deleteUser(id: string): Promise<IUser> {
        const result = await this.repository.user.delete({
            where: {
                id
            }
        });
        return result;
    }

}

export {
    UserRepository
}