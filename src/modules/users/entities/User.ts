import { v4 as uuid } from "uuid";
import { sign } from "jsonwebtoken";


class User {
    id: string;
    name: string;
    phone?: string;
    email: string;
    type?: string;
    password: string

    constructor(name: string, email: string, type: string = 'AGENT', phone: string, password: string) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.type = type;
        this.phone = phone;
        this.password = sign( { password }, process.env.SECRET_KEY )
    }
}

export {
    User
}