import Express from "express";
import { json, urlencoded } from "body-parser";
import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import "./extension/response.extension";
dotenv.config();

const app: Express.Express = Express();
app.use(cors({ credentials: true, origin: true }));
app.use(json());

app.use(urlencoded({ extended: true }));

import todo from "./routes/todo";
app.use(todo);
import user from "./routes/user";
app.use(user);

app.listen(process.env.PORT, () => {
  console.log(`Access to http://localhost:${process.env.PORT}`);
});
