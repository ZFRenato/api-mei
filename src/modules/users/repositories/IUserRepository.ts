import { IUser } from "../entities/IUser";

interface ICreateUserDTO {
  name: string;
  phone?: string;
  email: string;
  type?: string;
  password?: string;
}

interface IUserRepository {
  create({
    name,
    phone,
    email,
    type,
    password,
  }: ICreateUserDTO): Promise<IUser>;
  listAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser> | undefined;
  findByEmail(email: string): Promise<IUser> | undefined;
  deleteUser(id: string): Promise<IUser> | undefined;
}

export { IUserRepository, ICreateUserDTO };
