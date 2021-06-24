import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.run({ name, email, admin, password });

    return response.json(user);
  }
}

export { CreateUserController };
