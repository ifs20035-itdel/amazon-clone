import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserDetails } from './user-details.interface';

@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() user: UserRegisterDto,
  ): Promise<UserDetails | undefined> {
    return this.authService.register(user);
  }
}
