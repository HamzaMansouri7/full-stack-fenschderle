import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePastaDto } from './dto/create-pasta.dto';
import { UpdatePastaDto } from './dto/update-pasta.dto';
import { Pasta } from './entities/pasta.entity';

@Injectable()
export class PastaService {
 // create(createPastaDto: CreatePastaDto) {
   // return 'This action adds a new pasta';
 // }

 // findAll() {
 //   return `This action returns all pasta`;
 // }

  //findOne(id: number) {
 //   return `This action returns a #${id} pasta`;
  //}

 // update(id: number, updatePastaDto: UpdatePastaDto) {
  //  return `This action updates a #${id} pasta`;
 // }

 // remove(id: number) {
 //   return `This action removes a #${id} pasta`;
 // }
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

async create(createPastaDto: CreatePastaDto): Promise<Pasta> {
  const pasta = this.pastaRepository.create(createPastaDto);
  return  await this.pastaRepository.save(pasta);
}

async update(id: number, updatePastaDto: UpdatePastaDto): Promise<Pasta> {
  const pasta = await this.findOne(id);
  if (!pasta) {
    throw new NotFoundException(`Pasta #${id} not found`);
  }
  Object.assign(pasta, updatePastaDto);
  await this.pastaRepository.save(pasta);
  return pasta;
}

async remove(id: number): Promise<void> {
  const pasta = await this.findOne(id);
  if (!pasta) {
    throw new NotFoundException(`Pasta #${id} not found`);
  }
  await this.pastaRepository.remove(pasta);
}
}

