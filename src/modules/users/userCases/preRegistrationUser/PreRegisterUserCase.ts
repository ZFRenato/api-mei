import { IUser } from "../../entities/IUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { clientCache } from "../../../../utils/Cache";

interface IRequest {
    name: string,
    phone: string,
    email: string,
    type: string,
    password: string,
}


class PreRegisterUserCase {
    private userRepository: IUserRepository;

    constructor (userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute ({ name, phone, email, type, password }: IRequest): Promise<IUser> {

        
            const userAlreadyExist = await this.userRepository.findByEmail(email);
            if (userAlreadyExist) {
                throw new Error("Email Already registration");            
            }

            const newUser = new User(name, email, password, undefined, type, phone);
            await newUser.cryptPassword();

            const redis = clientCache();
            await redis.connect();
            console.log(newUser.id,60*60*24, JSON.stringify(newUser))
            await redis.setEx(newUser.id,60*60*24, JSON.stringify(newUser));
            //await redis.disconnect();

            return newUser;
    }

}

export {
    PreRegisterUserCase
}