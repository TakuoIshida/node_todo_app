import Express from "express";

const router = Express.Router();

router.post(
  "/save/todo",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: todoを新規保存する
    res.json({
      msg: "ok",
      status: 200,
      data: {
        hello: "save todo",
      },
    });
  }
);
router.post(
  "/update/todo",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: todoを更新する
    res.json({
      msg: "ok",
      status: 200,
      data: {
        hello: "update todo",
      },
    });
  }
);

export default router;
