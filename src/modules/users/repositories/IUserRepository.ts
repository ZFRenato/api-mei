import { User } from '../entities/User';

interface ICreateUserDTO {
    name: string,
    phone?: string,
    email: string,
    type?: string,
    password?: string
}

interface IUserRepository {
    create({ name, phone, email, type, password }:ICreateUserDTO): Promise <User>;
    listAll(): Promise <User[]>;
    findById(id: string): Promise <User> | undefined;
    findByEmail(email: string): Promise <User> | undefined;
    deleteUser(id: string): Promise <User> | undefined;
}

export {
    IUserRepository,
    ICreateUserDTO
}