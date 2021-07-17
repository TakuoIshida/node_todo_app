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
    await new UserContoroller().getUsers(req, res);
  }
);

// relation情報取得テスト
router.post(
  "/user_detail",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await new UserContoroller().getUserDetail(req, res);
  }
);

router.post(
  "/user/create",
  createValidationRules,
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await new UserContoroller().createUser(req, res);
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
    await new UserContoroller().updateUser(req, res);
  }
);

export default router;
