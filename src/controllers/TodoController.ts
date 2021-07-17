import Express from "express";
import * as Utils from "../utils/todo";
import { createConnection } from "typeorm";
import { ITodo } from "../contracts/entity/ITodo";

export class TodoController {
  async createTodo(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    // DBのコネクション・クローズのコードがメインの処理に依存する
    const con = await createConnection("default");
    try {
      const newTodo = {
        userId: req.body.userId as number,
        title: req.body.title as string,
        context: req.body.context as string,
      };
      const result = await Utils.createTodo(newTodo);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async updateTodo(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const userId = Number(req.body.id);
    const con = await createConnection("default");

    const findedTodo = await Utils.findByUserId(userId);
    if (!findedTodo) throw new Error("User not found");
    try {
      this.setTodoContent(req, findedTodo);
      const result = await Utils.updateTodo(findedTodo);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  private setTodoContent(req: Express.Request, findedTodo: ITodo): void {
    findedTodo.title = req.body.title as string;
    findedTodo.context = req.body.context as string;
  }

  async getTodos(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const con = await createConnection("default");
    const findedTodos = await Utils.findAllTodos();
    console.log(findedTodos);
    con.close();
  }
}
