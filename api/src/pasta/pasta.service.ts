import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';
import { Pasta } from './entities/pasta.entity';

@Injectable()
export class PastaService {

 constructor(
  @InjectRepository(Pasta)
  private readonly pastaRepository: Repository<Pasta>,
) {}

async findAll(): Promise<Pasta[]> {
  return this.pastaRepository.find();
}

async findOne(id: any): Promise<Pasta> {
  const pasta = await this.pastaRepository.findOne(id);
  if (!pasta) {
    throw new NotFoundException(`Pasta #${id} not found`);
  }
  return pasta;
}

async create(pastaBody: any) {
  const newpasta = this.pastaRepository.create(pastaBody);
  return await this.pastaRepository.save(newpasta) ;
}

async update(id: number, updatepastaDto: UpdatePastaDto) {
  const pasta = await this.findOne(id);
  if (!pasta) {
    throw new NotFoundException(`pasta #${id} not found`);
  }
  Object.assign(pasta, updatepastaDto);
  await this.pastaRepository.save(pasta);
  return pasta;
}

//async remove(id: number): Promise<void> {
 // const pasta = await this.findOne(id);
//  if (!pasta) {
//    throw new NotFoundException(`Pasta #${id} not found`);
 // }
 // await this.pastaRepository.remove(pasta);
//}
async remove(id: number) {
  await this.pastaRepository.update(id,{isDeleted : true});
}
}

