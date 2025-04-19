import { PartialType } from '@nestjs/mapped-types';
import { CreateJcDto } from './create-jc.dto';

export class UpdateJcDto extends PartialType(CreateJcDto) {}
