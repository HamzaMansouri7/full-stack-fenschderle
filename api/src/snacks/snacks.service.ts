import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
import { Snack } from './entities/snack.entity';

@Injectable()
export class SnacksService {
  snacksRepository: any;
 // create(createSnackDto: CreateSnackDto) {
   // return 'This action adds a new snack';
  //}

  //findAll() {
  //  return `This action returns all snacks`;
 // }

  //findOne(id: number) {
 //   return `This action returns a #${id} snack`;
 // }

 // update(id: number, updateSnackDto: UpdateSnackDto) {
    //return `This action updates a #${id} snack`;
 // }

 // remove(id: number) {
  //  return `This action removes a #${id} snack`;
  //}
  constructor(
    @InjectRepository(Snack)
    private SnackRepository: Repository<Snack>,
  ) {}
  
  async findAll(): Promise<Snack[]> {
    return this.SnackRepository.find();
  }
  
  async findOne(id: any): Promise<Snack> {
    const Snack = await this.snacksRepository.find(
          {
         where: { id: id }
    });
    if (!Snack) {
      throw new NotFoundException(`Snack #${id} not found`);
    }
    return Snack;
  }
  
  async create(Snackbody: any) {
    const newSalat = this.SnackRepository.create(Snackbody);
    return await this.SnackRepository.save(newSalat) ;
  }
  
  async update(id: number, updatesnacksDto: UpdateSnackDto): Promise<Snack> {
    const snacks= await this.findOne(id);
    if (!Snack) {
      throw new NotFoundException(`Snack #${id} not found`);
    }
    Object.assign(Snack, updatesnacksDto);
    await this.snacksRepository.save(Snack);
    return snacks;
  }
  
  //async remove(id: number): Promise<void> {
    //const Snack = await this.findOne(id);
    //if (!Snack) {
     // throw new NotFoundException(`Snack #${id} not found`);
    //}
   // await this.snacksRepository.remove(Snack);
  //}
  async remove(id: number) {
    await this.SnackRepository.update(id,{isDeleted : true});
  }
  }
  
  

