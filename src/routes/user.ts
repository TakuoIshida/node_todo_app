import Express from "express";
import { UserContoroller } from "../controllers/UserController";
const router = Express.Router();

// TODO: validator
router.get(
  "/users",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new UserContoroller().getUsers(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

router.post(
  "/user/create",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new UserContoroller().createUser(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

router.post(
  "/user/update",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new UserContoroller().updateUser(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

export default router;
