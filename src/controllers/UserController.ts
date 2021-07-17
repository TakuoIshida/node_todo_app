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
      await Utils.createUser(newUser);
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
    if (!finedUser) throw new Error("User not found");
    try {
      const newUser = {
        id: finedUser.id,
        name: req.body.name,
        todoList: req.body.todos,
      };
      await Utils.updateUser(newUser);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async getUsers(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const con = await createConnection("default");
    const finedUsers = await Utils.findAllUsers();
    if (!finedUsers) throw new Error("User not found");
    con.close();
  }
}
