import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} // we can inject the UsersService into the constructor
  @Get()
  getUsers(): any {
    // any is the return type
    return [{ id: 1, name: 'John Doe' }];
  }

  @Get(':id') // we can use :id to get the id from the URL
  getUserById(@Param('id') id: string): any {
    // we can use @Param('id') to get the id from the URL
    return {
      id: Number(id), // id is a string, so we need to convert it to a number
    };
  }
}
