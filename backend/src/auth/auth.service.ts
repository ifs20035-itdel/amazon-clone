import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRegisterDto } from 'src/user/dto/user-register.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    // The function hash take the 2nd parameter as how many round(s) will the hash processed
    return bcrypt.hash(password, 12);
  }

  async register(
    user: Readonly<UserRegisterDto>,
  ): Promise<UserDetails | string> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    // TODO : Fix "Email already used" case
    if (existingUser) return 'email already taken!';

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.createUser(
      name,
      email,
      hashedPassword,
    );

    return this.userService._getUserDetails(newUser);
  }
}
