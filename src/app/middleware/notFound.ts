import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Not Found",
    error: "",
    errorSources: [
      {
        path: req.originalUrl,
        message: "The requested resource was not found",
      },
    ],
  });
};

export default NotFound;
