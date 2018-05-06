import * as express from "express";
import chalk from "chalk";

import { router } from "./router";

const PORT_NUMBER = 3000;

const app = express();

const server = {
    startServer: () => {
        app.use("/api", router);
        // tslint:disable-next-line no-console
        app.listen(PORT_NUMBER, () => console.log(chalk.yellowBright(`Server is now listening in port ${PORT_NUMBER}`)));
        // tslint:enable
    },
};

export default server;
