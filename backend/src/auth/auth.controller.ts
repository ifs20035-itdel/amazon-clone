import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from 'src/user/dto/user-register.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserLoginDto } from 'src/user/dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() user: UserRegisterDto): Promise<UserDetails | string> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() user: UserLoginDto): Promise<string | { token: string }> {
    return this.authService.login(user);
  }
}
