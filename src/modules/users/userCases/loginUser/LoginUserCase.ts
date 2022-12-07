import { UserRepository } from "../../repositories/implementations/UserRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

class LoginUserCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }: IRequest): Promise<Object> {
    const userFound = await this.userRepository.findByEmail(email);
    if (!userFound) {
      throw new Error("User not found");
    }

    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword) {
        throw new Error("password incorrect");
    }

    const expireTime = 3*60*60

    const generationToken = jwt.sign({
        email: userFound.email,
        id: userFound.id
    }, process.env.SECRET_KEY, { expiresIn: expireTime });

    return {
        token: generationToken,
        expire: expireTime
    }

  }
}

export { LoginUserCase };
