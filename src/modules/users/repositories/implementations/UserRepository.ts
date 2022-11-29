import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {
    private repository: PrismaClient

    constructor(repository: PrismaClient) {
        this.repository = repository
    }

    async create({ name, phone, email, type, password }: ICreateUserDTO): Promise<User> {
        const newUser = new User(name, email, type, phone, password);
        const result = await this.repository.user.create({
            data: newUser
        })

        return result;
    }

    async listAll(): Promise<User[]> {
        const result = await this.repository.user.findMany();
        return result;
    }

    async findById(id: string): Promise<User> {
        const result = await this.repository.user.findUnique({
            where: {
                id
            }
        });
        return result;
    }

    async findByEmail(email: string): Promise<User> {
        const result = await this.repository.user.findUnique({
            where: {
                email
            }
        });
        return result;
    }

    async deleteUser(id: string): Promise<User> {
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