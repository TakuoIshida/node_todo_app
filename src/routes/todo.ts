import Express from "express";

const router = Express.Router();

router.post(
  "/save/todo",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: todoを新規保存する
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);
router.post(
  "/update/todo",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: todoを更新する
    // TODO: OK, NGレスポンスの共通関数作成
    res.json({
      msg: "ok",
      status: 200,
    });
  }
);

export default router;
