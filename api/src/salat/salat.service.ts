import { Injectable } from '@nestjs/common';
import { CreateSalatDto } from './dto/create-salat.dto';
import { UpdateSalatDto } from './dto/update-salat.dto';

@Injectable()
export class SalatService {
  create(createSalatDto: CreateSalatDto) {
    return 'This action adds a new salat';
  }

  findAll() {
    return `This action returns all salat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salat`;
  }

  update(id: number, updateSalatDto: UpdateSalatDto) {
    return `This action updates a #${id} salat`;
  }

  remove(id: number) {
    return `This action removes a #${id} salat`;
  }
}
