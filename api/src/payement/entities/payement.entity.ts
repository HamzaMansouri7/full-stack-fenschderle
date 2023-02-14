// import { ApiProperty } from "@nestjs/swagger";
// import { Order } from "src/order/entities/order.entity";
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// @Entity()
// export class Payement {
//     @PrimaryGeneratedColumn()
//     id: number;
  
//     @Column()
//     amount: number;
  
//     @Column()
//     currency: string;
  
//     @Column()
//     paymentMethodId: string;
  
//     @Column()
//     paymentIntentId: string;
  
//     @Column()
//     status: string;
  
//     @ManyToOne(type => Order, order => order.payments)
//     order: Order;
// }
