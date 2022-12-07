import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

class LoginUserCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }: IRequest) {
    const userFound = await this.userRepository.findByEmail(email);
    if (!userFound) {
      throw new Error("User not found");
    }
  }
}

export { LoginUserCase };
