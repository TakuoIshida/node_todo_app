import Express from "express";
import * as Utils from "../utils/user";
import { createConnection } from "typeorm";

export class UserContoroller {
  async createUser(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    // DBのコネクション・クローズのコードがメインの処理に依存する
    const con = await createConnection("default");
    try {
      const newUser = {
        name: req.body.name,
        todoList: req.body.todos,
      };
      const result = await Utils.createUser(newUser);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async updateUser(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const userId = Number(req.body.id);
    const con = await createConnection("default");

    const finedUser = await Utils.findById(userId);
    console.log("finedUser");
    console.log(finedUser);

    if (!finedUser) throw new Error("User not found");
    try {
      const newUser = {
        id: finedUser.id,
        name: req.body.name,
        todoList: req.body.todos,
      };
      const result = await Utils.updateUser(newUser);
      console.log(result);
      con.close();
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }
}
