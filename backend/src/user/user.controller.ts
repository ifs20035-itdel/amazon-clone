import { Controller, Param, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  @UseGuards(JwtGuard)
  async getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  @Get()
  @UseGuards(JwtGuard)
  async listAllUser(): Promise<UserDocument[]> {
    return this.userService.getAll();
  }
}
