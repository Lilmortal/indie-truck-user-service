import { Express } from "express";

const PORT_NUMBER = 3000;

export const startServer = (app: Express) =>
    app.listen(PORT_NUMBER);

