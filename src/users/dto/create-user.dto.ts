// Dto stands for Data Transfer Object. It is the schema representation of the data that is being transferred between the client and the server.

import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric() // we can use the class-validator library to add validation to the DTO
  @MaxLength(10)
  name: string; // required property

  @ApiProperty({ required: false }) // optional property
  age?: number;
}
