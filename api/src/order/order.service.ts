import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { STRIPE_CLIENT } from 'src/stripe/stripeConstant';
import Stripe from 'stripe';
import { CreateOrderDto } from './dto/create-order.dto';


@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @Inject (STRIPE_CLIENT) private stripe:Stripe,
  ) {
    this.stripe = new Stripe(process.env.STRIPE_KEY, { apiVersion: '2022-11-15' });
  }

  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async findOne(id: any): Promise<Order> {
    return await this.orderRepository.findOne(id);
  }

  async passNewOrder(body: any) {
    const order: any = this.orderRepository.create(body);
  
    try {
      // Make a payment with Stripe
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: body.payments.amount,
        currency: body.payments.currency,
        description: body.payments.description,
        payment_method: body.payments.payment_method,
        statement_descriptor: body.payments.statement_descriptor,
        metadata: body.payments.metadata,
        receipt_email: body.payments.receipt_email,
      });
  
      // Update the order with the payment status
      order.paymentState = paymentIntent.status;
      console.log('paymentIntent.status',paymentIntent.status);
  
      if (paymentIntent.status === 'succeeded') {
        // Payment is successful, save the order to the database
        return await this.orderRepository.save(order);
      } else {
        // Payment failed, throw an error
        throw new Error('Payment failed. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during payment processing
      // You can customize the error handling based on your requirements
      console.error('Error processing payment:', error);
      throw new Error('Payment failed. Please try again.');
    }
  }
  
  
  
}
