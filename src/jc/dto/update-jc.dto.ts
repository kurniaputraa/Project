import { PartialType } from '@nestjs/mapped-types';
import { CreateJcDto } from './create-jc.dto';
import { IsString } from 'class-validator';

export class UpdateJcDto extends PartialType(CreateJcDto) {
  @IsString()
  name: string;
}
