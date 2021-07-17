import { ITodo } from "./ITodo";

export interface IUser {
  id: number;
  name: string;
  todos?: ITodo[];
}
