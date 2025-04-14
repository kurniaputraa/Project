import { IsString } from 'class-validator';

export class CreateJcDto {
  @IsString()
  name: string;
}
