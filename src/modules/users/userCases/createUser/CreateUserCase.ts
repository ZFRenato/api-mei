import { clientCache } from "../../../../utils/Cache";
import { IUser } from "../../entities/IUser";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  id: string;
}

class CreateUserCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ id }: IRequest): Promise<IUser> {
    const redis = clientCache();
    await redis.connect();
    const isExistPreRegister = await redis.GETDEL(id);
    await redis.disconnect();
    if (!isExistPreRegister) {
      throw new Error("Time of url expired");
    }
    const newUser = JSON.parse(isExistPreRegister);

    return this.userRepository.create(newUser);
  }
}

export { CreateUserCase };
