import { LoginUserController } from "./LoginUserController";
import { prismaRepository } from "../../../../repository/index";
import { LoginUserCase } from "./LoginUserCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";


export default (): LoginUserController => {
    const userRepository = new UserRepository(prismaRepository);
    const loginUserCase = new LoginUserCase(userRepository);
    const loginUserController = new LoginUserController(loginUserCase);

    return loginUserController;
};
