import { DeepPartial } from "typeorm";
import { IUser } from "../contracts/entity/IUser";
import { User } from "../entity/user";
import { createConnection } from "typeorm";

// userのCRUD処理を記載します
export async function createUser(newUser: DeepPartial<User>): Promise<IUser> {
  const con = await createConnection("default");
  const repository = con.getRepository(User);
  const createdUser = repository.create(newUser);
  const result = await repository.save(createdUser);
  return result;
}
