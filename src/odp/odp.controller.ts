import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdpService } from './odp.service';
import { CreateOdpDto } from './dto/create-odp.dto';
import { UpdateOdpDto } from './dto/update-odp.dto';

@Controller('odp')
export class OdpController {
  constructor(private readonly odpService: OdpService) {}

  @Post()
  create(@Body() createOdpDto: CreateOdpDto) {
    return this.odpService.create(createOdpDto);
  }

  @Get()
  findAll() {
    return this.odpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdpDto: UpdateOdpDto) {
    return this.odpService.update(+id, updateOdpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odpService.remove(+id);
  }
}
