import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchnitzelDto } from './dto/create-schnitzel.dto';
import { UpdateSchnitzelDto } from './dto/update-schnitzel.dto';
import { Schnitzel } from './entities/schnitzel.entity';

@Injectable()
export class SchnitzelService {
  //create(createSchnitzelDto: CreateSchnitzelDto) {
   // return 'This action adds a new schnitzel';
  //}

  //findAll() {
  //  return `This action returns all schnitzel`;
  //}

 // findOne(id: number) {
  //  return `This action returns a #${id} schnitzel`;
 // }

 // update(id: number, updateSchnitzelDto: UpdateSchnitzelDto) {
  //  return `This action updates a #${id} schnitzel`;
 // }

 // remove(id: number) {
 //   return `This action removes a #${id} schnitzel`;
 // }
 constructor(
  @InjectRepository(Schnitzel)
  private readonly SchnitzelRepository: Repository<Schnitzel>,
) { }

async create(CreateSchnitzelDto: any) {
  const newSchnitzel = this.SchnitzelRepository.create(CreateSchnitzelDto);
  return await this.SchnitzelRepository.save(newSchnitzel) ;
}

async findAll() {
  return await this.SchnitzelRepository.find();
}

// async findOne(id: number) {
  // async findById(id: number): Promise<MarkDto> {
  //   return await this.markRepository.findOne(
  //     {
  //       where: { id: id }
  //     }
  //   );
  // }
//}
async findOne(id: any): Promise<Schnitzel> {
  const Schnitzel = await this.SchnitzelRepository.findOne(id);
  if (!Schnitzel) {
    throw new NotFoundException(`Schnitzel #${id} not found`);
  }
  return Schnitzel;
}

// update(id: number, updatePizzaDto: UpdatePizzaDto) {
 // return `This action updates a #${id} pizza`;
//}
async update(id: number, updateSchnitzelDto: UpdateSchnitzelDto): Promise<Schnitzel> {
  const Schnitzel = await this.findOne(id);
  if (!Schnitzel) {
    throw new NotFoundException(`Schnitzel #${id} not found`);
  }
  Object.assign(Schnitzel, updateSchnitzelDto);
  await this.SchnitzelRepository.save(Schnitzel);
  return Schnitzel;
}

// remove(id: number) {
//  return `This action removes a #${id} pizza`;
//}
//async remove(id: number): Promise<void> {
  //const Schnitzel = await this.findOne(id);
  //if (!Schnitzel) {
    //throw new NotFoundException(`Schnitzel #${id} not found`);
  //}
  //await this.SchnitzelRepository.remove(Schnitzel);
//}
async remove(id: number) {
  await this.SchnitzelRepository.update(id,{isDeleted : true});
}
}
