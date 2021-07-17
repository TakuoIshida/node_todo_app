import Express from "express";
import { TodoController } from "../controllers/TodoController";

const router = Express.Router();

router.get(
  "/todos",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new TodoController().getTodos(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

router.post(
  "/todo/create",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    await new TodoController().createTodo(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);
router.post(
  "/todo/update",
  async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: OK, NGレスポンスの共通関数作成
    await new TodoController().updateTodo(req);
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

export default router;
