import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchnitzelService } from './schnitzel.service';
import { CreateSchnitzelDto } from './dto/create-schnitzel.dto';
import { UpdateSchnitzelDto } from './dto/update-schnitzel.dto';

@Controller('schnitzel')
export class SchnitzelController {
  constructor(private readonly schnitzelService: SchnitzelService) {}

  @Post()
  create(@Body() createSchnitzelDto: any) {
    return this.schnitzelService.create(createSchnitzelDto);
  }

  @Get('getschnitzelList')
  findAll() {
    console.log('cx',this.schnitzelService.findAll())
    return this.schnitzelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schnitzelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchnitzelDto: UpdateSchnitzelDto) {
    return this.schnitzelService.update(+id, updateSchnitzelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schnitzelService.remove(+id);
  }
}
