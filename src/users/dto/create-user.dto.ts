// Dto stands for Data Transfer Object. It is the schema representation of the data that is being transferred between the client and the server.

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string; // required property

  @ApiProperty({ required: false }) // optional property
  age?: number;
}
