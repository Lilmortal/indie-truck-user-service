import { Request, Response, Router } from "express";

const router = Router();

// Get all users
router.get("/", () => {
    console.log("all");
});

// Get user by id
router.get("/:id", (req: Request, res: Response) => {
    console.log(req.params.id);
    res.send("test");
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
router.post("/:id/friend/:friendId", (req: Request) => {
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

export default router;