import { Request, Response, NextFunction } from "express";

export default function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    status: "error",
    message: "Unauthorized",
  });
}