import { Request, Response, Router } from "express";

import userRepository from "../repositories";

const router = Router();

(async () => {
    const db = await userRepository({ connectionString: "localhost", connectionPort: 27017, dbName: "indieTruckUser", collection: "user", username: "", password: "" });

    // Get all users
    router.get("/", () => {

        // db.get({});
    });

    // Get user by id
    router.get("/:id", async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await db.get({ id });
        res.send(user);
    });

    // Create user
    router.put("/", (req: Request, res: Response) => {
        console.log(req);
        res.send("get user details via object");
    });

    // Delete user
    router.delete("/:id", () => {
        console.log("delete");
    });

    // Add friend
    router.patch("/:id/friend/:friendId", (req: Request) => {
        const friendId = req.params.friendId;
        if (typeof friendId === "number") {
            console.log(req.params.id + " add " + friendId);
        }
    });

    // Delete friend
    router.delete("/:id/friend/:friendId", (req: Request) => {
        const friendId = req.params.friend;
        if (typeof friendId === "number") {
            console.log("delete friend");
        }
    });
})();

export default router;