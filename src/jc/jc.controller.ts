import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JcService } from './jc.service';
import { CreateJcDto } from './dto/create-jc.dto';
import { UpdateJcDto } from './dto/update-jc.dto';

@Controller('jc')
export class JcController {
  constructor(private readonly jcService: JcService) {}

  @Post()
  create(@Body() createJcDto: CreateJcDto) {
    return this.jcService.create(createJcDto);
  }

  @Get()
  findAll() {
    return this.jcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJcDto: UpdateJcDto) {
    return this.jcService.update(+id, updateJcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jcService.remove(+id);
  }
}
