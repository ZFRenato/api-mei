import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../entities/User";

interface IRequest {
    name: string,
    phone: string,
    email: string,
    type: string,
    password: string,
}


class CreateUserCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute({name, phone, email, type, password }: IRequest): Promise<User> {
        const isExist = await this.userRepository.findByEmail(email);
        
        if (isExist) {
            
            throw new Error("Email already is registed")
        }
        return this.userRepository.create({ name, phone, email, type, password });
        
    }
}

export {
    CreateUserCase
}