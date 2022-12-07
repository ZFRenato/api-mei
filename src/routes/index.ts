import { Router } from "express";

import { routerUsers } from "./users-routes";

const router = Router();

router.use("/user", routerUsers);

export { router };
