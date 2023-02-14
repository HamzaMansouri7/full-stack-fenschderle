import { Injectable } from '@nestjs/common';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';

@Injectable()
export class PastaService {
  create(createPastaDto: CreatePastaDto) {
    return 'This action adds a new pasta';
  }

  findAll() {
    return `This action returns all pasta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pasta`;
  }

  update(id: number, updatePastaDto: UpdatePastaDto) {
    return `This action updates a #${id} pasta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pasta`;
  }
}
