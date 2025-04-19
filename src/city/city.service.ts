import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prismaService: PrismaService){}

  async create(createCityDto: CreateCityDto) {
    try {
      return await this.prismaService.city.create({
        data: createCityDto
      })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      return await this.prismaService.city.findMany()
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.city.findMany({where: {id: id}})
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    try {
      return await this.prismaService.city.update({
        data: updateCityDto,
        where: {
          id: id
        }
      })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.city.delete({where: {id: id}})
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
