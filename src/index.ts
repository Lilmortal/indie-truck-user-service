import * as express from "express";

import { router } from "./router";
import { startServer } from "./server";

const app = express();

app.use("/api", router);

startServer(app);