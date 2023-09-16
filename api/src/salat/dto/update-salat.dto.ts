import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSalatDto } from './create-salat.dto';
import { Order } from 'src/order/entities/order.entity';

export class UpdateSalatDto extends PartialType(CreateSalatDto) {
    @ApiProperty()
    name?: string;
   
   @ApiProperty()
    description?: string;
 
   @ApiProperty()
    price?: number;

    @ApiProperty()
    pictureUrl?: string;
 
   //@ApiProperty()
    //discount?: number;
 
    @ApiProperty()
    isDeleted?: number;
 
    @ApiProperty()
    createdAt?: number;
 
   // @ApiProperty()
    //createdBy?: number;
 
    @ApiProperty()
    updatedAt?: number;
 
   // @ApiProperty()
   // updatedBy?: number;

   @ApiProperty()
   order?: Order;

}
