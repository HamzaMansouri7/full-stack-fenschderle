import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,
  ) { }

 async create(pizzaBody: any) {
    const newPizza = this.pizzaRepository.create(pizzaBody);
    return await this.pizzaRepository.save(newPizza) ;
  }

 async findAll() {
    return await this.pizzaRepository.find() ;
  }

 // async findOne(id: number) {
    // async findById(id: number): Promise<MarkDto> {
    //   return await this.pizzaRepository.findOne(
    //     {
    //       where: { id: id }
    //     }
    //   );
    // }
  //}
  async findOne(id: any): Promise<Pizza> {
    const pizza = await this.pizzaRepository.findOne(id);
    if (!pizza) {
      throw new NotFoundException(`Pizza #${id} not found`);
    }
    return pizza;
  }


  async patch(id: any, updatepizzaDto: UpdatePizzaDto) {
    const Pizza = await this.pizzaRepository.findOne({where : {id:id}});
    if (!Pizza) {
      throw new NotFoundException(`pizza #${id} not found`);
    }
    Object.assign(Pizza, UpdatePizzaDto);
    await this.pizzaRepository.save(Pizza);
    return Pizza;
  }

 //  remove(id: number) {
  //  return `This action removes a #${id} pizza`;
  //}
  async remove(id: number) {
    await this.pizzaRepository.update(id,{isDeleted : true});
  }
}
