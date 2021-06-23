import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const router = Router();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router };
