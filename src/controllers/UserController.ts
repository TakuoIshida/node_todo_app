import Express from "express";
import * as Utils from "../utils/user";
import { createConnection } from "typeorm";
import { IUser } from "../contracts/entity/IUser";

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

    const findedUser = await Utils.findById(userId);
    if (!findedUser) throw new Error("User not found");
    try {
      this.setUserContent(req, findedUser);
      await Utils.updateUser(findedUser);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  private setUserContent(req: Express.Request, findedUser: IUser): void {
    findedUser.name = req.body.name;
    findedUser.todoList = req.body.todoList;
  }

  async getUsers(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const con = await createConnection("default");
    // TODO: レスポンスと一緒に返す
    await Utils.findAllUsers();
    con.close();
  }
}
