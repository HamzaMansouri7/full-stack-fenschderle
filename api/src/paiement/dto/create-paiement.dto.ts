import { ApiProperty } from "@nestjs/swagger";

export class CreatePayementDto {
        @ApiProperty()
        amount: number;

        @ApiProperty()
        currency: string;

        @ApiProperty()
        paymentMethodId: string;
        
        //@ApiProperty()
        //paymentIntentId: string;

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
