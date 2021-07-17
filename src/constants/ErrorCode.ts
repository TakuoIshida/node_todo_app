/**
 * error コードを列挙し、APIのレスポンスに含めます。
 */
export const ErrorCode = {
  NotStringError: "NotStringError",
  NotNumberError: "NotNumberError",
  NotTodosError: "NotTodosError",
} as const;
