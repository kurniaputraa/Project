import { IsString } from 'class-validator';

export class CreateOdpDto {
  @IsString()
  name: string;
}
