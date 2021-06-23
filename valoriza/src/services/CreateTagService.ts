import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { Tag } from "../entities/Tag";

class CreateTagService {
  async run(name: string): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Name is required");
    }

    const nameAlreadyExists = await tagsRepository.findOne({
      where: { name },
    });

    if (nameAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepository.create({ name });
    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
