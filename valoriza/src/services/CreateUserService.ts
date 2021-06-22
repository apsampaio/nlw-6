import { User } from "../entities/User";

import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

type iRequest = {
  name: string;
  email: string;
  admin?: boolean;
};

class CreateUserService {
  async run({ name, email, admin }: iRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({ name, email, admin });
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
