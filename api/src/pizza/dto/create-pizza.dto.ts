import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/order/entities/order.entity";

export class CreatePizzaDto {
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
  isDeleted?: boolean;

  @ApiProperty()
  createdAt?: Date;

  //@ApiProperty()
 // createdBy?: number;

  @ApiProperty()
  updatedAt?: Date;

 // @ApiProperty()
 // updatedBy?: number;

  @ApiProperty()
  sizeId?: number;
  
  @ApiProperty()
  order?: Order;
}
