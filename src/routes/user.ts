import Express from "express";
import { UserContoroller } from "../controllers/UserController";
const router = Express.Router();

router.post(
  "/save/user",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: userを新規保存する
    const user = new UserContoroller();
    await user.saveUser(req);
    res.json({
      msg: "ok",
      status: 200,
      data: {
        hello: "save user",
      },
    });
  }
);
router.post(
  "/update/user",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: userを更新する
    res.json({
      msg: "ok",
      status: 200,
      data: {
        hello: "update user",
      },
    });
  }
);

export default router;
