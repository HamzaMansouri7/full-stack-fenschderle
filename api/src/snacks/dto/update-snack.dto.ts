import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSnackDto } from './create-snack.dto';

export class UpdateSnackDto extends PartialType(CreateSnackDto) {
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
