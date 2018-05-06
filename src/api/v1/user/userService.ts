import { Request, Response, Router } from "express";

const router = Router();

router.get("/user", (req: Request, res: Response) => {
    console.log(req);
    res.send("test");
});

export default router;