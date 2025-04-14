import { Injectable } from '@nestjs/common';
import { CreateJcDto } from './dto/create-jc.dto';
import { UpdateJcDto } from './dto/update-jc.dto';

@Injectable()
export class JcService {
  create(createJcDto: CreateJcDto) {
    return 'This action adds a new jc';
  }

  findAll() {
    return `This action returns all jc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jc`;
  }

  update(id: number, updateJcDto: UpdateJcDto) {
    return `This action updates a #${id} jc`;
  }

  remove(id: number) {
    return `This action removes a #${id} jc`;
  }
}
