import { prismaRepository } from "../../../../repository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

export default (): CreateUserController => {
  const userRepository = new UserRepository(prismaRepository);
  const createUserCase = new CreateUserCase(userRepository);
  const createUserController = new CreateUserController(createUserCase);

  return createUserController;
};
