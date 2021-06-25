import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";

class ListUserSentComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listCompliments = new ListUserSentComplimentsService();

    const compliments = await listCompliments.run(id);

    return response.json(compliments);
  }
}

export { ListUserSentComplimentsController };
