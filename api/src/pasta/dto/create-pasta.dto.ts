import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class CreatePastaDto {

  @ApiProperty()
<<<<<<< HEAD
  readonly description?: string;
=======
   description?: string;
>>>>>>> create-order-entity

  @ApiProperty()
  reference?: string;

  @ApiProperty()
<<<<<<< HEAD
  readonly deliveryPrice?: number;

  @ApiProperty()
  readonly totalPrice?: number;

  @ApiProperty()
  readonly timbrePrice?: number;

  @ApiProperty()
  readonly globalDiscount?: number;


  @ApiProperty()
  readonly isCompleted?: boolean;

  @ApiProperty()
  readonly active?: boolean;

  @ApiProperty()
  readonly userName?: string;

}
// zokki ya zokii zokki ya hoooo zebi faddit
=======
   deliveryPrice?: number;

  @ApiProperty()
   totalPrice?: number;

  @ApiProperty()
   timbrePrice?: number;

  @ApiProperty()
   globalDiscount?: number;


  @ApiProperty()
   isCompleted?: boolean;

  @ApiProperty()
   active?: boolean;

  @ApiProperty()
   userName?: string;

}
>>>>>>> create-order-entity
