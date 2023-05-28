import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PastaService } from './pasta.service';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';

@Controller('pasta')
export class PastaController {
  constructor(private readonly pastaService: PastaService) {}

  @Post()
  create(@Body() createPastaDto: CreatePastaDto) {
    return this.pastaService.create(createPastaDto);
  }

  @Get( '/getPastaList')
  findAll() {
    return this.pastaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pastaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePastaDto: UpdatePastaDto) {
    return this.pastaService.patch(+id, updatePastaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pastaService.remove(+id);
  }
}
