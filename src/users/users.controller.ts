import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users') // we can use the ApiTags decorator to add tags to the Swagger document
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} // we can inject the UsersService into the constructor. Dependency injection is a core concept in NestJS that allows us to inject dependencies into classes without having to worry about creating instances of those classes.

  @ApiOkResponse({ type: User, isArray: true }) // we can use the ApiOkResponse decorator to add a response type to the Swagger document
  @ApiQuery({ name: 'name', required: false }) // we can use the ApiQuery decorator to add a query parameter to the Swagger document
  @Get()
  getUsers(@Query('name') name: string): User[] {
    // any is the return type
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({ type: User, description: 'The found user' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Get(':id') // we can use :id to get the id from the URL
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    // we can use @Param('id') to get the id from the URL
    const user = this.usersService.findById(id);
    if (!user) throw new NotFoundException(); // we can use the NotFoundException to return a 404 error if the user is not found
    // if (!user) throw new BadRequestException(); // we can use exceptions to return different status codes
    return user;
  }

  @ApiCreatedResponse({ type: User }) // we can use the ApiCreatedResponse decorator to add a response type to the Swagger document
  @ApiBadRequestResponse({ description: 'Bad request' }) // we can use the ApiBadRequestResponse decorator to add a response type to the Swagger document
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
