import { IUser } from "../../entities/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUsersCase {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(): Promise<IUser[]> {
    return this.repository.listAll();
  }
}

export { ListUsersCase };
