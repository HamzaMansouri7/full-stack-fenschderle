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
