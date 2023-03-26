import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
 
 constructor(
  @InjectRepository(Order)
  private readonly orderRepository: Repository<Order>,
) {}

async findAll(): Promise<Order[]> {
  return await this.orderRepository.find();
}

async findOne(id: any): Promise<Order> {
  return await this.orderRepository.findOne(id);
}

async create(createOrderDto: any): Promise<Order> {
  return await this.orderRepository.save(createOrderDto);
}

async update(id: any, updateOrderDto: UpdateOrderDto): Promise<Order> {
  // const {customerName, customerAddress,totalPrice } = updateOrderDto;
  // await this.orderRepository.update(id, {customerName,customerAddress,totalPrice });
  return await this.orderRepository.findOne(id);
}

async remove(id: number): Promise<void> {
  await this.orderRepository.delete(id);
}
}

