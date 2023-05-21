import { ApiProperty } from '@nestjs/swagger';
import { Pasta } from 'src/pasta/entities/pasta.entity';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import { Salat } from 'src/salat/entities/salat.entity';
import { Schnitzel } from 'src/schnitzel/entities/schnitzel.entity';
import { Snack } from 'src/snacks/entities/snack.entity';

export class CreateOrderDto {
  @ApiProperty()
  customerName: string;

  @ApiProperty()
  customerAddress: string;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  isDelivered: boolean;

  @ApiProperty()
  paymentState: string; // Update the type to string

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  pasta: Pasta[];

  @ApiProperty()
  pizza: Pizza[];

  @ApiProperty()
  snack: Snack[];

  @ApiProperty()
  salad: Salat[];

  @ApiProperty()
  schnitzel: Schnitzel[];

  @ApiProperty()
  payments: any;

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
