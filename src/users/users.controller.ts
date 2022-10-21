import { UserCredentialsDto } from './dto/user-credentials';
import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signUp')
  signUp(@Body() userCredentialsDto: UserCredentialsDto): Promise<void> {
    return;
  }
}
