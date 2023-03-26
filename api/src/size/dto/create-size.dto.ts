import { ApiProperty } from "@nestjs/swagger";

export class CreateSizeDto {
    @ApiProperty()
    taille1?: number;
   
    @ApiProperty()
    taille2?: number;
 
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
