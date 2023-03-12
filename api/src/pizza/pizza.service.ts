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
    return await this.pizzaRepository.find() ;;
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
  async findOne(id: any): Promise<Pizza> {
    const pizza = await this.pizzaRepository.findOne(id);
    if (!pizza) {
      throw new NotFoundException(`Pizza #${id} not found`);
    }
    return pizza;
  }

 // update(id: number, updatePizzaDto: UpdatePizzaDto) {
   // return `This action updates a #${id} pizza`;
  //}
  async update(id: number, updatePizzaDto: UpdatePizzaDto): Promise<Pizza> {
    const pizza = await this.findOne(id);
    if (!pizza) {
      throw new NotFoundException(`Pizza #${id} not found`);
    }
    Object.assign(pizza, updatePizzaDto);
    await this.pizzaRepository.save(pizza);
    return pizza;
  }

 // remove(id: number) {
  //  return `This action removes a #${id} pizza`;
  //}
  async remove(id: number): Promise<void> {
    const pizza = await this.findOne(id);
    if (!pizza) {
      throw new NotFoundException(`Pizza #${id} not found`);
    }
    await this.pizzaRepository.remove(pizza);
  }
}
