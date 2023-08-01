import { Controller, Param, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }

  @Get()
  async listAllUser(): Promise<UserDocument[]> {
    return this.userService.getAll();
  }
}
