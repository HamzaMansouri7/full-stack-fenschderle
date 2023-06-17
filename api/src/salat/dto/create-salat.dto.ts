import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/order/entities/order.entity";

export class CreateSalatDto {
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
