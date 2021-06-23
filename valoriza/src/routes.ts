import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";

import ensureAdmin from "./middlewares/ensureAdmin";

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const router = Router();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
