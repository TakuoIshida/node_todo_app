import Express from "express";
import { TodoController } from "../controllers/TodoController";
import { body, validationResult } from "express-validator";
import * as ValidatorLogic from "../validation/validationLogic";

const router = Express.Router();

const createValidationRules = [
  ValidatorLogic.num(body("userId")),
  ValidatorLogic.str(body("title")),
  ValidatorLogic.str(body("context")),
];

const updateValidationRules = [
  ValidatorLogic.num(body("id")),
  ValidatorLogic.str(body("title")),
  ValidatorLogic.str(body("context")),
];

router.get(
  "/todos",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new TodoController().getTodos(res);
  }
);

router.post(
  "/todo/create",
  createValidationRules,
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await new TodoController().createTodo(req, res);
  }
);
router.post(
  "/todo/update",
  updateValidationRules,
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await new TodoController().updateTodo(req, res);
  }
);

export default router;
