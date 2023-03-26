import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalatDto } from './dto/create-salat.dto';
import { UpdateSalatDto } from './dto/update-salat.dto';
import { Salat } from './entities/salat.entity';

@Injectable()
export class SalatService {

 // create(createSalatDto: CreateSalatDto) {
  //  return 'This action adds a new salat';
 // }

 // findAll() {
  //  return `This action returns all salat`;
 // }

  //findOne(id: number) {
    //return `This action returns a #${id} salat`;
  //}

  //update(id: number, updateSalatDto: UpdateSalatDto) {
   // return `This action updates a #${id} salat`;
 // }

 // remove(id: number) {
  //  return `This action removes a #${id} salat`;
 // }
// constructor(
 // @InjectRepository(Salat)
 // private readonly salatRepository: Repository<Salat>,
//) {}

//async findAll(): Promise<Salat[]> {
 // return await this.salatRepository.find();
//}

//async findOne(id: any): Promise<Salat> {
  //return await this.salatRepository.findOne(id);
//}

//async create(createSalatDto: CreateSalatDto): Promise<Salat> {
  //const { name, price, description } = createSalatDto;
  //const salat = this.salatRepository.create({ name, price, description });
  //return await this.salatRepository.save(salat);
//}

//async update(id: any, updateSalatDto: UpdateSalatDto): Promise<Salat> {
  //const { name, price, description } = updateSalatDto;
  //await this.salatRepository.update(id, { name, price, description });
  //return await this.salatRepository.findOne(id);
//}

//async remove(id: number): Promise<void> {
  //await this.salatRepository.delete(id);
//}
constructor(
  @InjectRepository(Salat)
  private readonly SalatRepository: Repository<Salat>,
) { }

async create(Salatbody: any) {
  let newSalat = this.SalatRepository.create(Salatbody);
  newSalat = {...Salatbody, createdAt : new Date()};
  return await this.SalatRepository.save(newSalat) ;
}

async findAll(): Promise<Salat[]> {
  return await this.SalatRepository.find() ;
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
async findOne(id: any): Promise<Salat> {
  const Salat = await this.SalatRepository.findOne(id);
  if (!Salat) {
    throw new NotFoundException(`Salat #${id} not found`);
  }
  return Salat;
}

// update(id: number, updatePizzaDto: UpdatePizzaDto) {
 // return `This action updates a #${id} pizza`;
//}
async patch(id: number, updateSalatDto: UpdateSalatDto): Promise<Salat> {
  const Salat = await this.findOne(id);
  if (!Salat) {
    throw new NotFoundException(`Salat #${id} not found`);
  }
  Object.assign(Salat, updateSalatDto);
  await this.SalatRepository.save(Salat);
  return Salat;
}

// remove(id: number) {
//  return `This action removes a #${id} pizza`;
//}
//async remove(id: number): Promise<void> {
 // const Salat = await this.findOne(id);
 // if (!Salat) {
 //   throw new NotFoundException(`Salat #${id} not found`);
 // }
 // await this.SalatRepository.remove(Salat);
//}
async remove(id: number) {
  await this.SalatRepository.update(id,{isDeleted : true});
}

}
