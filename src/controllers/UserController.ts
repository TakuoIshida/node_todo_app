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
        name: String(req.body.name),
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
    const userId = req.body.id as number;
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
    findedUser.todos = req.body.todos;
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
  async getUserDetail(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const con = await createConnection("default");
    // TODO: レスポンスと一緒に返す
    const userId = req.body.id as number;
    try {
      const result = await Utils.findUserAndTodosByUserId(userId);
      console.log("result");
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }
}

// レスポンス共通化
// エラーハンドリング 共通化
// クリーンアーキテクチャーの学習
// Factory Strategyパターン復習
// インフラの初期設定・移行作業
