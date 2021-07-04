import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import { Todo } from "./todo";
import { IUser } from "../contracts/entity/IUser";

@Entity({ name: "user" })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  @OneToMany(type => Todo, todos => todos.user)
  todos!: Todo[];

  @CreateDateColumn()
  readonly createdAt?: Date;

  @CreateDateColumn()
  readonly updatedAt?: Date;
}
