import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  orderRepository: any;
 // create(createOrderDto: CreateOrderDto) {
  //  return 'This action adds a new order';
 // }

 // findAll() {
 //   return `This action returns all order`;
 // }

  //findOne(id: number) {
 //   return `This action returns a #${id} order`;
 // }

 // update(id: number, updateOrderDto: UpdateOrderDto) {
 //   return `This action updates a #${id} order`;
 // }

 // remove(id: number) {
 //   return `This action removes a #${id} order`;
 // }
 constructor(
  @InjectRepository(Order)
  private readonly salatRepository: Repository<Order>,
) {}

async findAll(): Promise<Order[]> {
  return await this.salatRepository.find();
}

async findOne(id: any): Promise<Order> {
  return await this.salatRepository.findOne(id);
}

async create(createOrderDto: CreateOrderDto): Promise<Order> {
  const { customerName, customerAddress,totalPrice } = createOrderDto;
  const salat = this.orderRepository.create({customerName, customerAddress,totalPrice });
  return await this.salatRepository.save(salat);
}

async update(id: any, updateOrderDto: UpdateOrderDto): Promise<Order> {
  const {customerName, customerAddress,totalPrice } = updateOrderDto;
  await this.orderRepository.update(id, {customerName,customerAddress,totalPrice });
  return await this.salatRepository.findOne(id);
}

async remove(id: number): Promise<void> {
  await this.orderRepository.delete(id);
}
}

