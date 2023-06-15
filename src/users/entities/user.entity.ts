// this is class that represent the shape of the object that we want to store in the database

import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty() // we can use the ApiProperty decorator to add a property to the Swagger document
  id: number;

  @ApiProperty()
  name: string;
}
