import { Router } from "express";
import createUserController from "../../modules/users/userCases/createUser";
import listUsersController from "../../modules/users/userCases/listUsers";

const routerUsers = Router();

routerUsers.post('/', async (request, response) => {
    return await createUserController().handle(request, response);
});

routerUsers.get('/', async (request, response) => {
    return await listUsersController().handle(request, response);
})

export {
    routerUsers
}

