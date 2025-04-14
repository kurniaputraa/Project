import { PartialType } from '@nestjs/mapped-types';
import { CreateOdpDto } from './create-odp.dto';
import { IsString } from 'class-validator';

export class UpdateOdpDto extends PartialType(CreateOdpDto) {
  @IsString()
  name: string;
}
