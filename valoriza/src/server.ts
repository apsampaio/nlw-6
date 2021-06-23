import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { router } from "./routes";
import "./database";

import AppError from "./error/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.status).json({
        err: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

app.listen(3333, () => console.log("=== Server Working Port 3333 ==="));
