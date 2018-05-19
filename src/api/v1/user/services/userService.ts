import { Request, Response, Router } from "express";

import userRepository from "../repositories";

const router = Router();

(async () => {
    // environment variables
    const db = await userRepository({ connectionString: "localhost", connectionPort: 27017, dbName: "indieTruckUser", collection: "user", username: "", password: "" });

    // Get all users
    router.get("/", ({ }, res: Response) => {
        res.send("Woo!");
        // db.get({});
    });

    // Get user by id
    router.get("/:id", async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await db.get({ id });
        res.send(user);
    });

    // Add swagger
    // Create user
    router.put("/", ({ }, res: Response) => {
        res.send("get user details via object");
        // 200 and 201
    });

    // Delete user
    router.delete("/:id", () => {
        // 202
    });

    // Add friend
    router.post("/:id/friend/:friendId", ({ }) => {
        // const friendId = req.params.friendId;
        // if (typeof friendId === "number") {
        //     console.log(req.params.id + " add " + friendId);
        // }
    });

    // Delete friend
    router.delete("/:id/friend/:friendId", ({ }) => {
        // const friendId = req.params.friend;
        // if (typeof friendId === "number") {
        //     console.log("delete friend");
        // }
        // 202
    });
})();

export default router;