import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";


class ListUsersCase {
    private repository: IUserRepository

    constructor (repository: IUserRepository) {
        this.repository = repository;
    }

    async execute(): Promise<User[]> {
        return await this.repository.listAll();
    }
}

export {
    ListUsersCase
}