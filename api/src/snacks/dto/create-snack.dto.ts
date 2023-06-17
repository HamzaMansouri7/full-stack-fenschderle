import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/order/entities/order.entity";
import { Size } from "src/size/entities/size.entity";

export class CreateSnackDto {
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
