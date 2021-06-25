import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { Tag } from "../entities/Tag";

class ListTagsService {
  async run(): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return tags;
  }
}

export { ListTagsService };
