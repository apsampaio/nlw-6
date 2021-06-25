import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService";

class ListUserReceivedComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listCompliments = new ListUserReceivedComplimentsService();

    const compliments = await listCompliments.run(id);

    return response.json(compliments);
  }
}

export { ListUserReceivedComplimentsController };
