import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePayementDto } from './create-paiement.dto';

export class UpdatePayementDto extends PartialType(CreatePayementDto) {
    @ApiProperty()
    amount: number;

    @ApiProperty()
    currency: string;

    @ApiProperty()
    paymentMethodId: string;
    
   // @ApiProperty()
   // paymentIntentId: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    orderId: number;
    
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

