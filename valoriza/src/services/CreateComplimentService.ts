import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { Compliment } from "../entities/Compliment";

import AppError from "../error/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

type iRequest = {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
};

class CreateComplimentService {
  async run({
    message,
    tag_id,
    user_receiver,
    user_sender,
  }: iRequest): Promise<Compliment> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_receiver === user_sender) {
      throw new AppError("Send and Receiver can't be the same");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new AppError("User receiver does not exist");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      message,
      user_receiver,
      user_sender,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
