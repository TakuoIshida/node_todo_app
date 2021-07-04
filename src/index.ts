import Express from "express";
import { json, urlencoded } from "body-parser";
import "reflect-metadata";
import cors from "cors";
import http from "http";

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORT);

const app: Express.Express = Express();
app.use(cors({ credentials: true, origin: true }));
app.use(json());

app.use(urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req: Express.Request, res: Express.Response) =>
  res.json({
    msg: "hogehoge",

    status: 200,
  })
);

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}! Access to http://localhost:${port}`);
});
