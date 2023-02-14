import { Injectable } from '@nestjs/common';
import { CreateSchnitzelDto } from './dto/create-schnitzel.dto';
import { UpdateSchnitzelDto } from './dto/update-schnitzel.dto';

@Injectable()
export class SchnitzelService {
  create(createSchnitzelDto: CreateSchnitzelDto) {
    return 'This action adds a new schnitzel';
  }

  findAll() {
    return `This action returns all schnitzel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schnitzel`;
  }

  update(id: number, updateSchnitzelDto: UpdateSchnitzelDto) {
    return `This action updates a #${id} schnitzel`;
  }

  remove(id: number) {
    return `This action removes a #${id} schnitzel`;
  }
}
