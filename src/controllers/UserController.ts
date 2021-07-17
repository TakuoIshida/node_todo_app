import Express from "express";
import * as Utils from "../utils/user";
export class UserContoroller {
  async createUser(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    try {
      const newUser = {
        name: req.body.name,
        todoList: req.body.todos,
      };
      const result = await Utils.createUser(newUser);
      console.log(result);
      // await con.close();
    } catch (error) {
      console.log(error.message);
    }
  }
}
