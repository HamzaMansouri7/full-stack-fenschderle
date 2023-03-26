import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateExtraDto } from './create-extra.dto';

export class UpdateExtraDto extends PartialType(CreateExtraDto) {
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
