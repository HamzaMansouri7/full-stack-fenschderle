import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalatService } from './salat.service';
import { CreateSalatDto } from './dto/create-salat.dto';
import { UpdateSalatDto } from './dto/update-salat.dto';

@Controller('salat')
export class SalatController {
  constructor(private readonly salatService: SalatService) {}

  @Post()
  create(@Body() createSalatDto: CreateSalatDto) {
    return this.salatService.create(createSalatDto);
  }

  @Get()
  findAll() {
    return this.salatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalatDto: UpdateSalatDto) {
    return this.salatService.patch(+id, updateSalatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salatService.remove(+id);
  }
}
