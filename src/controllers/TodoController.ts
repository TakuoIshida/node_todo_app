import Express from "express";
import * as Utils from "../utils/todo";
import { createConnection } from "typeorm";
import { ITodo } from "../contracts/entity/ITodo";
import { ErrorCode } from "../constants/ErrorCode";

export class TodoController {
  async createTodo(
    req: Express.Request,
    res: Express.Response
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
      await Utils.createTodo(newTodo);
      res.ok();
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  async updateTodo(
    req: Express.Request,
    res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    const userId = Number(req.body.id);
    const con = await createConnection("default");
    try {
      const findedTodo = await Utils.findByUserId(userId);
      if (!findedTodo) return res.ng(ErrorCode.TodoNotFoundError);
      this.setTodoContent(req, findedTodo);
      await Utils.updateTodo(findedTodo);
      res.ok();
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }

  private setTodoContent(req: Express.Request, findedTodo: ITodo): void {
    findedTodo.title = req.body.title as string;
    findedTodo.context = req.body.context as string;
  }

  async getTodos(res: Express.Response): Promise<void> {
    const con = await createConnection("default");
    try {
      const findedTodos = await Utils.findAllTodos();
      res.ok({ result: findedTodos });
    } catch (error) {
      console.log(error.message);
    }
    con.close();
  }
}
