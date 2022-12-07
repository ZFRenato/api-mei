import { response, Router } from "express";

import createUserController from "../../modules/users/userCases/createUser";
import listUsersController from "../../modules/users/userCases/listUsers";
import preRegisterUserController from "../../modules/users/userCases/preRegistrationUser";

const routerUsers = Router();

// Create Pre-register of user

routerUsers.post("/", async (request, response) => {
  return await preRegisterUserController().handle(request, response);
});

// Create User after confirmed email

routerUsers.get("/check-email/:id", async (request, response) => {
  return await createUserController().handle(request, response);
});

// List all users

routerUsers.get("/", async (request, response) => {
  return await listUsersController().handle(request, response);
});

// Login User

routerUsers.post("/login", async (request, reponse) => {});

export { routerUsers };
