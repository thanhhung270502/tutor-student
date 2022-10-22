import { UserCredentialsDto } from './dto/user-credentials';
import { UsersService } from './users.service';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signUp')
  signUp(@Body() userCredentialsDto: UserCredentialsDto): Promise<void> {
    return this.usersService.signUp(userCredentialsDto);
  }

  @Post('/signIn')
  signIn(
    @Body() userCredentialsDto: UserCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.usersService.signIn(userCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
}
