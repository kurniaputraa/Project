import { PartialType } from '@nestjs/mapped-types';
import { CreateOdcDto } from './create-odc.dto';
import { IsString } from 'class-validator';

export class UpdateOdcDto extends PartialType(CreateOdcDto) {
  @IsString()
  name: string;
}
