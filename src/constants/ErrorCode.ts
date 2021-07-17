/**
 * error コードを列挙し、APIのレスポンスに含めます。
 */
export const ErrorCode = {
  // Validation Error
  NotStringError: "NotStringError",
  NotNumberError: "NotNumberError",
  NotTodosError: "NotTodosError",

  // query Error
  UserNotFoundError: "UserNotFoundError",
  TodoNotFoundError: "TodoNotFoundError",
  // other
  UnExpectedError: "UnExpectedError",
} as const;
