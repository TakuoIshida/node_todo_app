import Express from "express";
import { body, validationResult } from "express-validator";
import { UserContoroller } from "../controllers/UserController";
import * as ValidatorLogic from "../validation/validationLogic";
const router = Express.Router();

const createValidationRules = [ValidatorLogic.str(body("name"))];

const updateValidationRules = [
  ValidatorLogic.num(body("id")),
  ValidatorLogic.str(body("name")),
  ValidatorLogic.todos(body("todos")),
];

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

// relation情報取得テスト
router.post(
  "/user_detail",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new UserContoroller().getUserDetail(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

router.post(
  "/user/create",
  createValidationRules,
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
  updateValidationRules,
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await new UserContoroller().updateUser(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

export default router;

const todo = [
  {
    userId: 123,
    title: "this is title test",
    context: "this is context test",
  },
  {
    userId: 456,
    title: "this is title test2",
    context: "this is context test2",
  },
];
