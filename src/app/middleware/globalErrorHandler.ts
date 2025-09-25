import { status } from "./../../../node_modules/effect/src/Fiber";
import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import httpStatus from "http-status";
const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || "Something went wrong";
  let error = err;
  return res.status(statusCode).json({
    success,
    message,
    error,
  });
};

export default globalErrorHandler;
