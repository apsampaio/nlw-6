import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

import AppError from "../error/AppError";
import { hash } from "bcryptjs";

type iRequest = {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
};

class CreateUserService {
  async run({ name, email, admin, password }: iRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email || !name || !password) {
      throw new AppError("Name and Email required");
    }

    const userAlreadyExists = await usersRepository.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
