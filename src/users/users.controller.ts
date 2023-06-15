import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users') // we can use the ApiTags decorator to add tags to the Swagger document
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} // we can inject the UsersService into the constructor. Dependency injection is a core concept in NestJS that allows us to inject dependencies into classes without having to worry about creating instances of those classes.

  @Get()
  getUsers(): User[] {
    // any is the return type
    return this.usersService.findAll();
  }

  @Get(':id') // we can use :id to get the id from the URL
  getUserById(@Param('id') id: string): User {
    // we can use @Param('id') to get the id from the URL
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
