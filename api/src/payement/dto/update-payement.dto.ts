import { PartialType } from '@nestjs/mapped-types';
import { CreatePayementDto } from './create-payement.dto';

export class UpdatePayementDto extends PartialType(CreatePayementDto) {
   
    amount: number;
    currency: string;
    paymentMethodId: string;
    paymentIntentId: string;
    status: string;
    orderId: number;
}
