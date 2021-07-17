import Express from "express";
import { UserContoroller } from "../controllers/UserController";
const router = Express.Router();

router.post(
  "/save/user",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const user = new UserContoroller();
    await user.createUser(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

router.post(
  "/update/user",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const user = new UserContoroller();
    await user.updateUser(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

export default router;
