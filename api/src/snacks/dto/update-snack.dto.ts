import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSnackDto } from './create-snack.dto';
import { Size } from 'src/size/entities/size.entity';
import { Order } from 'src/order/entities/order.entity';

export class UpdateSnackDto extends PartialType(CreateSnackDto) {
    @ApiProperty()
    name?: string;
   
   @ApiProperty()
    description?: string;
 
   @ApiProperty()
    price?: number;

    @ApiProperty()
    pictureUrl?: string;
 
  // @ApiProperty()
   // discount?: number;
 
    @ApiProperty()
    isDeleted?: number;
 
    @ApiProperty()
    createdAt?: number;
 
   // @ApiProperty()
   // createdBy?: number;
 
    @ApiProperty()
    updatedAt?: number;
 
   // @ApiProperty()
   // updatedBy?: number;
   @ApiProperty()
   sizeId?: Size;

   @ApiProperty()
   order?: Order;
}
