import { Injectable } from '@nestjs/common';
import { CreateOdcDto } from './dto/create-odc.dto';
import { UpdateOdcDto } from './dto/update-odc.dto';

@Injectable()
export class OdcService {
  create(createOdcDto: CreateOdcDto) {
    return 'This action adds a new odc';
  }

  findAll() {
    return `This action returns all odc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odc`;
  }

  update(id: number, updateOdcDto: UpdateOdcDto) {
    return `This action updates a #${id} odc`;
  }

  remove(id: number) {
    return `This action removes a #${id} odc`;
  }
}
