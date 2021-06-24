import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

import AppError from "../error/AppError";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface iRequest {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async run({ email, password }: iRequest): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      email,
    });

    if (!user) {
      throw new AppError("Email/Password incorrect", 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email/Password incorrect", 400);
    }

    const token = sign(
      {
        email: user.email,
      },
      "MYSECRETKEY",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
