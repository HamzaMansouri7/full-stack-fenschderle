import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class CreatePastaDto {

  @ApiProperty()
  readonly description?: string;

  @ApiProperty()
  reference?: string;

  @ApiProperty()
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