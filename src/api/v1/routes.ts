import { Router } from "express";

import userService from "./user";

const routes = Router();

routes.use(userService);

export default routes;