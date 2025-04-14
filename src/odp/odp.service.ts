import { Injectable } from '@nestjs/common';
import { CreateOdpDto } from './dto/create-odp.dto';
import { UpdateOdpDto } from './dto/update-odp.dto';

@Injectable()
export class OdpService {
  create(createOdpDto: CreateOdpDto) {
    return 'This action adds a new odp';
  }

  findAll() {
    return `This action returns all odp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odp`;
  }

  update(id: number, updateOdpDto: UpdateOdpDto) {
    return `This action updates a #${id} odp`;
  }

  remove(id: number) {
    return `This action removes a #${id} odp`;
  }
}
