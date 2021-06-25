import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const decode = verify(token, "MYSECRETKEY");
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
