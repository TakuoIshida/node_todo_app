import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ITodo } from "../contracts/entity/ITodo";
import { User } from "./user";

@Entity({ name: "todos" })
export class Todo extends BaseEntity implements ITodo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  title?: string;

  @Column()
  context?: string;

  @ManyToOne(type => User, user => user.todos)
  user!: User;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @CreateDateColumn()
  readonly updatedAt?: Date;
}
