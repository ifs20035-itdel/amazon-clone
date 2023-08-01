import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from 'src/user/dto/user-login.dto';
import { UserRegisterDto } from 'src/user/dto/user-register.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    // The function hash take the 2nd parameter as how many round(s) will the hash processed
    return bcrypt.hash(password, 12);
  }

  async isMatchPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
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

  async login(
    user: Readonly<UserLoginDto>,
  ): Promise<{ token: string } | string> {
    const existingUser = await this.userService.findByEmail(user.email);

    if (existingUser) {
      const doesMatch = await this.isMatchPassword(
        user.password,
        existingUser.password,
      );
      if (doesMatch) {
        const jwt = await this.jwtService.signAsync({});
        return { token: jwt };
      }
    }
    return 'Incorrect email or password';
  }
}
