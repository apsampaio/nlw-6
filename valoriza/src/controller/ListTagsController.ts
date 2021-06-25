import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTags = new ListTagsService();

    const tags = await listTags.run();

    return response.json(tags);
  }
}

export { ListTagsController };
