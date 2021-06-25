import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { message, tag_id, user_receiver } = request.body;

    const createCompliment = new CreateComplimentService();

    const compliment = await createCompliment.run({
      message,
      tag_id,
      user_receiver,
      user_sender: request.user_id,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
