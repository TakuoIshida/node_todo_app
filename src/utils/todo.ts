import { DeepPartial } from "typeorm";
import { ITodo } from "../contracts/entity/ITodo";
import { Todo } from "../entity/todo";
import { getRepository } from "typeorm";

// TodoのCRUD処理を記載します
/**
 * Todo新規作成
 * @param newTodo
 * @returns
 */
export async function createTodo(newTodo: DeepPartial<Todo>): Promise<ITodo> {
  const repository = getRepository(Todo);
  const createdTodo = repository.create(newTodo);
  const result = await repository.save(createdTodo);
  return result;
}

/**
 * Todo更新
 * @param Todo updateしたいTodo
 * @returns
 */
export async function updateTodo(todo: ITodo): Promise<ITodo> {
  const repository = getRepository(Todo);
  const result = await repository.save(todo);
  return result;
}

/**
 * 指定の userId にマッチする、todo１件取得します
 * @param userId
 * @returns
 */
export async function findByUserId(userId: number): Promise<ITodo | undefined> {
  const repository = getRepository(Todo);
  const result = await repository.findOne({ where: { userId: userId } });
  return result;
}

/**
 * Todoを10件まで取得します。
 * @returns
 */
export async function findAllTodos(): Promise<ITodo[]> {
  const repository = getRepository(Todo);
  const result = await repository.find({
    take: 10,
  });
  return result;
}
