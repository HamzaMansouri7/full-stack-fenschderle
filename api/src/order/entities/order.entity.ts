// import { Pasta } from "src/pasta/entities/pasta.entity";
// import { Pizza } from "src/pizza/entities/pizza.entity";
// import { Salat } from "src/salat/entities/salat.entity";
// import { Schnitzel } from "src/schnitzel/entities/schnitzel.entity";
// import { Snack } from "src/snacks/entities/snack.entity";
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


// @Entity()
// export class Order {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   customerName: string;
 

//   @Column()
//   customerAddress: string;

//   @Column()
//   totalPrice: number;

//   @Column({ default: false })
//   isDelivered: boolean;

//   @Column({ default: 'pending' })
//   paymentState: string;
//   @Column()
//   quantity : number;

//   @ManyToOne(type => Pasta)
//   pasta: Pasta;

//   @ManyToOne(type => Pizza)
//   pizza: Pizza;

//   @ManyToOne(type => Snack)
//   snack: Snack;

//   @ManyToOne(type => Salat)
//   salad: Salat;

//   @ManyToOne(type => Schnitzel)
//   schnitzel: Schnitzel;
//     payments: any;
// }
