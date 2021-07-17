import Express from "express";
import * as Utils from "../utils/user";
import { createConnection } from "typeorm";
import { IUser } from "../contracts/entity/IUser";
import { ITodo } from "../contracts/entity/ITodo";
import { ErrorCode } from "../constants/ErrorCode";

export class UserContoroller {
  async createUser(
    req: Express.Request,
    res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    // DBのコネクション・クローズのコードがメインの処理に依存する
    const con = await createConnection("default");
    try {
      const newUser = {
        name: String(req.body.name),
      };
      await Utils.createUser(newUser);
      res.ok();
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async updateUser(
    req: Express.Request,
    res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const userId = req.body.id as number;
    const con = await createConnection("default");

    const findedUser = await Utils.findById(userId);
    if (!findedUser) return res.ng(ErrorCode.UserNotFoundError);
    try {
      this.setUserContent(req, findedUser);
      await Utils.updateUser(findedUser);
      res.ok();
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  private setUserContent(req: Express.Request, findedUser: IUser): void {
    findedUser.name = req.body.name as string;
    findedUser.todos = req.body.todos as ITodo[];
  }

  async getUsers(req: Express.Request, res: Express.Response): Promise<void> {
    const con = await createConnection("default");
    try {
      const users = await Utils.findAllUsers();
      if (!users) return res.ng(ErrorCode.UserNotFoundError);
      res.ok({ result: users });
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async getUserDetail(
    req: Express.Request,
    res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const con = await createConnection("default");
    const userId = req.body.id as number;
    try {
      const userDetail = await Utils.findUserAndTodosByUserId(userId);
      if (!userDetail) return res.ng(ErrorCode.UserNotFoundError);
      res.ok({ result: userDetail });
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }
}
