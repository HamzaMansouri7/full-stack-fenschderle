import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePizzaDto } from './create-pizza.dto';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {

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
