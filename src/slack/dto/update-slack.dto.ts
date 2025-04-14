import { PartialType } from '@nestjs/mapped-types';
import { CreateSlackDto } from './create-slack.dto';
import { IsString } from 'class-validator';

export class UpdateSlackDto extends PartialType(CreateSlackDto) {
  @IsString()
  name: string;
}
