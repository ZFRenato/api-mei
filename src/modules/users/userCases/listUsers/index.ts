import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { prismaRepository } from "../../../../repository"
import { ListUsersCase } from "./ListUsersCase";


export default(): ListUsersController => {
    const userRepository = new UserRepository(prismaRepository);
    const listUsersCase = new ListUsersCase(userRepository);
    const listUsersController = new ListUsersController(listUsersCase);

    return listUsersController;
}