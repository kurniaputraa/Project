import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdcService } from './odc.service';
import { CreateOdcDto } from './dto/create-odc.dto';
import { UpdateOdcDto } from './dto/update-odc.dto';

@Controller('odc')
export class OdcController {
  constructor(private readonly odcService: OdcService) {}

  @Post()
  create(@Body() createOdcDto: CreateOdcDto) {
    return this.odcService.create(createOdcDto);
  }

  @Get()
  findAll() {
    return this.odcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdcDto: UpdateOdcDto) {
    return this.odcService.update(+id, updateOdcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odcService.remove(+id);
  }
}
