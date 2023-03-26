 import { ApiProperty } from "@nestjs/swagger";
import { Pasta } from "src/pasta/entities/pasta.entity";
 import { Pizza } from "src/pizza/entities/pizza.entity";
 import { Salat } from "src/salat/entities/salat.entity";
 import { Schnitzel } from "src/schnitzel/entities/schnitzel.entity";
 import { Snack } from "src/snacks/entities/snack.entity";
 import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


 @Entity()
 export class Order {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ApiProperty()
    @Column("text", { name: "name", nullable: true})
    name: string | null;
 
  @ApiProperty()
  @Column("text", { name: "customerAddress", nullable: true})
  customerAddress: string | null;
   
  @ApiProperty()
  @Column("double precision", { name: "totalprice", nullable: true, default: 0 })
  totalprice: number | null;

  @ApiProperty()
  @Column("text", { name: "paymentState", nullable: true, default:'pending'  })
  paymentState: string | null;
  
  @ApiProperty()
  @Column("text", { name: "isDelivered", nullable: true, default: false})
  isDelivered: boolean | null;


   @ApiProperty()
   @Column("double precision", { name: "quantity", nullable: true, default: 0 })
   quantity: number | null;
       
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

   // @ApiProperty()
   // @ManyToOne(type => Pasta)
   // pasta: Pasta;
  
     //@ApiProperty()
     //@ManyToOne(type => Pizza)
    // pizza: Pizza;
  
    // @ManyToOne(type => Snack)
    // snack: Snack;
  
     //@ApiProperty()
     //@ManyToOne(type => Salat)
     //salad: Salat;
  
     //@ApiProperty()
    // @ManyToOne(type => Schnitzel) schnitzel: Schnitzel;  payments: any;
 }
