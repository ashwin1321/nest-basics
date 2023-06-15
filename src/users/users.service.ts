import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Ashwin' },
    { id: 0, name: 'Ashwin' },
    { id: 4, name: 'test' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const id = this.users.length + 1;
    this.users.push({ id, name: createUserDto.name });
    return { id, name: createUserDto.name };
  }
}
