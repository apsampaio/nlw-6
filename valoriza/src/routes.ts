import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";

const createUserController = new CreateUserController();

const router = Router();

router.post("/users", createUserController.handle);

export { router };
