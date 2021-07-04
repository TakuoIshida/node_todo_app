import Express from "express";

const router = Express.Router();

router.get("/test", (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.json({
    msg: "ok",
    status: 200,
    data: {
      hello: "hello world",
    },
  });
});

export default router;
