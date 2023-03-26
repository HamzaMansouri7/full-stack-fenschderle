import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Size } from './entities/size.entity';

@Injectable()
export class SizeService {
  sizeRepository: any;
  constructor(
    @InjectRepository(Size)
    private readonly SizeRepository: Repository<Size>,
  ) { }
  async create(sizeBody: any) {
    let newpasta = this.SizeRepository.create(sizeBody);
    const newsize = {...sizeBody, createdAt : new Date()};
    return await this.SizeRepository.save(newpasta) ;
  }
  async findAll(): Promise<Size[]> {
    return this.sizeRepository.find();
  }

  async findOne(id: any): Promise<Size> {
    const size = await this.sizeRepository.findOne(id);
    if (!size) {
      throw new NotFoundException(`size #${id} not found`);
    }
    return size;
  }

  async patch(id: any, updatesizeDto: UpdateSizeDto) {
    const Size = await this.sizeRepository.findOne({where : {id:id}});
    if (!Size) {
      throw new NotFoundException(`size #${id} not found`);
    }
    Object.assign(Size, updatesizeDto);
    await this.sizeRepository.save(Size);
    return Size;
  }
  async remove(id: number) {
    await this.sizeRepository.patch(id,{isDeleted : true});
  }
}
