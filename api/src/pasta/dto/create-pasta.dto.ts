import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Order } from "src/order/entities/order.entity";


export class CreatePastaDto {

  @ApiProperty()
   name?: string;
  
  @ApiProperty()
   description?: string;

  @ApiProperty()
   price?: number;

  @ApiProperty()
   pictureUrl?: string;

  //@ApiProperty()
  // discount?: number;

   @ApiProperty()
   isdeleted?: number;

   @ApiProperty()
   createdat?: number;

   //@ApiProperty()
   //createdBy?: number;

   @ApiProperty()
   updatedat?: number;

  // @ApiProperty()
  // updatedBy?: number;
 
  @ApiProperty()
  order?: Order;
}
