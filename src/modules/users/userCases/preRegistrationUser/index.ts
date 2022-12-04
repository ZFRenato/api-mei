import { UserRepository } from "../../repositories/implementations/UserRepository";
import { PreRegisterUserController } from "./PreRegisterUserController";
import { prismaRepository } from "../../../../repository";
import { PreRegisterUserCase } from "./PreRegisterUserCase";


export default(): PreRegisterUserController => {

    const userRepository = new UserRepository(prismaRepository);
    const preRegisterUserCase = new PreRegisterUserCase(userRepository);
    const preRegisterUserController = new PreRegisterUserController(preRegisterUserCase);

    return preRegisterUserController;
}