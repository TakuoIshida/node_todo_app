import Express from "express";

const router = Express.Router();

router.post(
  "/save/user",
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // TODO: userを新規保存する
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
