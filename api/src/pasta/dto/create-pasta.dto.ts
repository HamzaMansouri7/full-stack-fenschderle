import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class CreatePastaDto {

  @ApiProperty()
   name?: string;
  
  @ApiProperty()
   description?: string;

  @ApiProperty()
   price?: number;

  @ApiProperty()
   discount?: number;

   @ApiProperty()
   isDeleted?: number;

   @ApiProperty()
   createdAt?: number;

   @ApiProperty()
   createdBy?: number;

   @ApiProperty()
   updatedAt?: number;

   @ApiProperty()
   updatedBy?: number;

}
