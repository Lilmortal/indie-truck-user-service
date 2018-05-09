import { Router } from "express";

import userService from "./user";

const routes = Router();

routes.use("/user", userService);

export default routes;