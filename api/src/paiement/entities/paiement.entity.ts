import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/order/entities/order.entity";
 import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
 @Entity()
 export class Payement {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ApiProperty()
    @Column("number", { name: "amount", nullable: true, default: 0 })
    amount: number | null;
  
    
    @ApiProperty()
  @Column("double precision", { name: "currency", nullable: true  })
  currency: string | null;
   
  @ApiProperty()
  @Column("integer", { name: "paymentMethodId", nullable: true  })
  paymentMethodId: string | null;
 
 // @ApiProperty()
 // @Column("integer", { name: "paymentIntentId", nullable: true  })
 // paymentIntentId: string | null;
    
  @ApiProperty()
  @Column("double precision", { name: "status", nullable: true  })
  status: string | null;
   
  // @ApiProperty()
  // @ManyToOne(type => Order, order => order.payments)
  //  order: Order;
     
   @ApiProperty()
   @Column("boolean", { name: "isdeleted", nullable: true, default: false })
   isDeleted: boolean | null;
 
   @ApiProperty()
   @Column("timestamp with time zone", { name: "createdat", nullable: true })
   createdAt: Date | null;
 
   @ApiProperty()
   @Column("integer", { name: "createdby", nullable: true })
   createdBy: number | null;
 
   @ApiProperty()
   @Column("timestamp with time zone", { name: "updatedat", nullable: true })
   updatedAt: Date | null;
 
   @ApiProperty()
   @Column("integer", { name: "updatedby", nullable: true })
   updatedBy: number | null;
 }

