import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ListUserReceivedComplimentsController } from "./controller/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "./controller/ListUserSentComplimentsController";

import ensureAdmin from "./middlewares/ensureAdmin";
import ensureAuthenticated from "./middlewares/ensureAuthenticated";

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();
const listUserSentComplimentsController =
  new ListUserSentComplimentsController();

const router = Router();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliment",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/sent/:id",
  ensureAuthenticated,
  listUserSentComplimentsController.handle
);
router.get(
  "/users/compliments/received/:id",
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle
);

export { router };
