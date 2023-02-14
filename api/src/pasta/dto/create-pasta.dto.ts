import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class CreatePastaDto {

  @ApiProperty()
   description?: string;

  @ApiProperty()
  reference?: string;

  @ApiProperty()
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
