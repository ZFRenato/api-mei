import { prismaRepository } from "../../../../repository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersCase } from "./ListUsersCase";
import { ListUsersController } from "./ListUsersController";

export default (): ListUsersController => {
  const userRepository = new UserRepository(prismaRepository);
  const listUsersCase = new ListUsersCase(userRepository);
  const listUsersController = new ListUsersController(listUsersCase);

  return listUsersController;
};
