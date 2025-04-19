import { PartialType } from '@nestjs/mapped-types';
import { CreateOdpDto } from './create-odp.dto';

export class UpdateOdpDto extends PartialType(CreateOdpDto) {}
