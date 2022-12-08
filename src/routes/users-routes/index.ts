import { Router } from "express";

import createUserController from "../../modules/users/userCases/createUser";
import listUsersController from "../../modules/users/userCases/listUsers";
import preRegisterUserController from "../../modules/users/userCases/preRegistrationUser";
import loginUserController from "../../modules/users/userCases/loginUser";
import { auth } from "../../middleware/Auth";

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

routerUsers.get("/", auth, async (request, response) => {
  console.log('👻👻', request.body.user_acess);
  return await listUsersController().handle(request, response);
});

// Loggin User

routerUsers.post("/login", async (request, response) => {
  return await loginUserController().handle(request, response);
});

export { routerUsers };
