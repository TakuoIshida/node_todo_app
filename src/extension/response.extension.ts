import { Response, response } from "express";
import { ITodo } from "../contracts/entity/ITodo";
export {};
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Response {
      // eslint-disable-next-line @typescript-eslint/ban-types
      ok(result?: { [key: string]: string | number | object | any[] | any } | undefined): void;
      ng(errorCode: string): void;
      unauthorized(): void;
    }
  }
}

response.ok = function (
  // eslint-disable-next-line @typescript-eslint/ban-types
  result?: { [key: string]: string | number | object | any[] | any } | undefined
) {
  const self = this as Response;
  result ? self.status(200).json(result) : self.status(200).json({});
};

response.ng = function (errorCode: string): void {
  const self = this as Response;
  self.status(400).json({ status: 400, errorCode: errorCode });
};

response.unauthorized = function (): void {
  const self = this as Response;
  self.status(401).json({});
};
