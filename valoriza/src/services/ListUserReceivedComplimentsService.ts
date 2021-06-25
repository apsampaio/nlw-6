import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { Compliment } from "../entities/Compliment";

import AppError from "../error/AppError";

class ListUserReceivedComplimentsService {
  async run(id: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: { user_receiver: id },
    });

    return compliments;
  }
}

export { ListUserReceivedComplimentsService };
