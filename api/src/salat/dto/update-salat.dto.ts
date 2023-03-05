import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSalatDto } from './create-salat.dto';

export class UpdateSalatDto extends PartialType(CreateSalatDto) {
    @ApiProperty()
    name?: string;

    @ApiProperty()
    description?: string;
    
    @ApiProperty()
    price?: number;

    @ApiProperty()
    isDeleted?: number;

    @ApiProperty()
    createdAt?: Date;

    @ApiProperty()
    createdBy?: number;

    @ApiProperty()
    updatedAt?: Date;

    @ApiProperty()
    updatedBy?: number;

}
