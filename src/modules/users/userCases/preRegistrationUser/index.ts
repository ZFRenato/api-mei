import { prismaRepository } from "../../../../repository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { PreRegisterUserCase } from "./PreRegisterUserCase";
import { PreRegisterUserController } from "./PreRegisterUserController";

export default (): PreRegisterUserController => {
  const userRepository = new UserRepository(prismaRepository);
  const preRegisterUserCase = new PreRegisterUserCase(userRepository);
  const preRegisterUserController = new PreRegisterUserController(
    preRegisterUserCase
  );

  return preRegisterUserController;
};
