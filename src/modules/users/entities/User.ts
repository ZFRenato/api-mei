import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { IUser } from "./IUser";


class User implements IUser{
    id: string = uuid();
    name: string;
    phone?: string;
    email: string;
    type: string = 'AGENT';
    password: string

    constructor(name: string, email: string, password: string, id?: string, type?: string, phone?: string) {   
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.phone = phone;
        this.password = password;
    }

    async cryptPassword (): Promise<void> {
        const secret = process.env.SECRET_KEY;
        const salt = 8;
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
    }
}

export {
    User
}