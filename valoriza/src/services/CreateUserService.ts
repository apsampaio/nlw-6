import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

import AppError from "../error/AppError";

type iRequest = {
  name: string;
  email: string;
  admin?: boolean;
};

class CreateUserService {
  async run({ name, email, admin }: iRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email || !name) {
      throw new AppError("Name and Email required");
    }

    const userAlreadyExists = await usersRepository.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = usersRepository.create({ name, email, admin });
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
