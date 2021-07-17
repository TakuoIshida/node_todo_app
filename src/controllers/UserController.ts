import Express from "express";
import { User } from "../entity/user";

import { createConnection } from "typeorm";
export class UserContoroller {
  async saveUser(
    req: Express.Request
    // res: Express.Response
    // next: Express.NextFunction
  ): Promise<void> {
    try {
      const con = await createConnection();
      const repository = con.getRepository(User);
      console.log("connectionOptions");
      console.log(repository);
      const user = repository.create({
        name: "name",
        todos: [],
      });
      // const user = repository.create({
      //   name: req.body.name,
      //   todos: req.body.todos,
      // });
      await repository.save(user);
      await con.close();
    } catch (error) {
      console.log(error.message);
    }
  }
}
