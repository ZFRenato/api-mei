import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../entities/IUser";
import { clientCache } from "../../../../utils/Cache";

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

    async execute({name, phone, email, type, password }: IRequest): Promise<IUser> {
        const isExist = await this.userRepository.findByEmail(email);
        const redis = clientCache();
        await redis.connect();
        const result = await redis.setEx('02', 60, JSON.stringify({ name, phone, email, type, password }));
        
        if (isExist) {
            
            throw new Error("Email already is registed")
        }
        return this.userRepository.create({ name, phone, email, type, password });
        
    }
}

export {
    CreateUserCase
}