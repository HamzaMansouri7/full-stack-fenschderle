export class CreatePayementDto {
  
        amount: number;
        currency: string;
        paymentMethodId: string;
        paymentIntentId: string;
        status: string;
        orderId: number;
      
}
