import { DeepPartial } from "typeorm";
import { IUser } from "../contracts/entity/IUser";
import { User } from "../entity/user";
import { getRepository } from "typeorm";

// userのCRUD処理を記載します
/**
 * User新規作成
 * @param newUser
 * @returns
 */
export async function createUser(newUser: DeepPartial<User>): Promise<IUser> {
  const repository = getRepository(User);
  const createdUser = repository.create(newUser);
  const result = await repository.save(createdUser);
  return result;
}

/**
 * User更新
 * @param User updateしたいUser
 * @returns
 */
export async function updateUser(user: IUser): Promise<IUser> {
  const repository = getRepository(User);
  const result = await repository.save(user);
  return result;
}

/**
 * 指定のUserIdにマッチする、１件取得します
 * @param user
 * @returns
 */
export async function findById(id: number): Promise<IUser | undefined> {
  const repository = getRepository(User);
  const result = await repository.findOne(id);
  return result;
}
