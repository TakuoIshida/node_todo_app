import { ValidationChain } from "express-validator";
import { ErrorCode } from "../constants/ErrorCode";
import { ITodo } from "../contracts/entity/ITodo";

/**
 * 文字列かどうか？
 * @param chain
 * @returns
 */
export const str = (chain: ValidationChain): ValidationChain =>
  chain.notEmpty().bail().isString().withMessage(ErrorCode.NotStringError);

/**
 * 自然数かどうか？
 * @param chain
 * @returns
 */
export const num = (chain: ValidationChain): ValidationChain =>
  chain.notEmpty().bail().isInt({ min: 1 }).withMessage(ErrorCode.NotNumberError);

/**
 * todoの構造体(ITodo[])となっているか？
 * @param chain
 * @returns
 */
export const todos = (targets: ValidationChain): ValidationChain =>
  targets
    .isArray()
    .bail()
    .custom(targets => {
      if (!(targets instanceof Array)) {
        throw new Error(ErrorCode.NotTodosError);
      }
      for (const item of targets) {
        if (!isTodoConstruct(item)) {
          throw new Error(ErrorCode.NotTodosError);
        }
      }
      return true;
    });

function isTodoConstruct(arg: any): arg is ITodo {
  return arg.userId !== undefined && arg.title !== undefined && arg.context !== undefined;
}
