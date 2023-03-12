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
   paymentState: string;
   @ApiProperty()
   quantity : number;

   @ApiProperty()
   pasta: Pasta;

   @ApiProperty()
   pizza: Pizza;

   @ApiProperty()
   snack: Snack;

   @ApiProperty()
   salad: Salat;

   @ApiProperty()
   schnitzel: Schnitzel;
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
