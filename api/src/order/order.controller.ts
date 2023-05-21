import { Controller, Get, Post, Body, Patch, Param, Delete,Headers, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { STRIPE_CLIENT } from 'src/stripe/stripeConstant';
import Stripe from 'stripe';



@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService , 
    @Inject (STRIPE_CLIENT) private stripe:Stripe) {}


  @Get('/stripe-customer-list')
  findAll() {
    return this.stripe.customers.list();
  }

  @Get('/verify-connection')
  async verifyConnection() {
    try {
      const stripe = new Stripe(process.env.STRIPE_KEY,{apiVersion: '2022-11-15',});
      const customers = await stripe.customers.list();
      return { success: true, message: 'Successfully connected to Stripe', customers };
    } catch (error) {
      return { success: false, message: 'Failed to connect to Stripe', error };
    }
  }

  @Post('/newOrder')
  createOrder(@Body() orderData: CreateOrderDto) {
    const body: CreateOrderDto = {
      customerName: "John Doe",
      customerAddress: "123 Main St",
      totalPrice: 2999,
      isDelivered: false,
      paymentState: "pending",
      quantity: 1,
      pasta:null,
      pizza: [
        {
          // Pizza details for the first pizza
          id: 1,
          name: "Margherita",
          size: null,
          price: 799,
        },
        {
          // Pizza details for the second pizza
          id: 2,
          name: "Pepperoni",
          size: null,
          price: 999,
        },
        {
          // Pizza details for the third pizza
          id: 3,
          name: "Vegetarian",
          size: null,
          price: 699,
        },
      ],
      snack: null,
      salad: null,
      schnitzel: null,
      payments: {
        amount: 2999,
        currency: "usd",
        description: "Payment for order ID: 123456",
        payment_method: "pm_card_visa",
        statement_descriptor: "MyStore",
        metadata: {
          orderId: "123456",
          customerName: "John Doe",
        },
        receipt_email: "john.doe@example.com",
      },
    };
    
      
    return this.orderService.passNewOrder(body);
  }


  

 

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}
