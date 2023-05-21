import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Pasta } from 'src/pasta/entities/pasta.entity';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import { Salat } from 'src/salat/entities/salat.entity';
import { Schnitzel } from 'src/schnitzel/entities/schnitzel.entity';
import { Snack } from 'src/snacks/entities/snack.entity';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiProperty()
  customerName: string;

  @ApiProperty()
  customerAddress: string;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  isDelivered: boolean;

  @ApiProperty()
  paymentState: 'pending' | 'completed' | 'failed' | 'canceled'; // Use a specific type or enum for payment state

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  pasta?: Pasta[];

  @ApiProperty()
  pizza: Pizza[];

  @ApiProperty()
  snack: Snack[];

  @ApiProperty()
  salad: Salat[];

  @ApiProperty()
  schnitzel: Schnitzel[];

  @ApiProperty()
  payments: {
    amount: number;
    currency: string;
    description: string;
    payment_method: string;
    statement_descriptor: string;
    metadata: {
      orderId: string;
      customerName: string;
    };
    receipt_email: string;
  };

  @ApiProperty()
  isDeleted?: number;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  createdBy?: number;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  updatedBy?: number;
}
