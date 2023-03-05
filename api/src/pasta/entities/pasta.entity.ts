import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

<<<<<<< HEAD
@Entity("pizza")
=======
@Entity()
>>>>>>> create-order-entity
export class Pasta {
  
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ApiProperty()
<<<<<<< HEAD
  @Column("text", { name: "reference", nullable: true})
  reference: string | null;

  @ApiProperty()
  @Column("double precision", { name: "deliveryprice", nullable: true, default: 0 })
  deliveryPrice: number | null;

  @ApiProperty()
  @Column("double precision", { name: "timbrePrice", nullable: true, default: 0 })
  timbrePrice: number | null;
=======
  @Column("text", { name: "name", nullable: true})
  name: string | null;
>>>>>>> create-order-entity

  @ApiProperty()
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @ApiProperty()
  @Column("double precision", { name: "totalprice", nullable: true, default: 0 })
<<<<<<< HEAD
  totalPrice: number | null;
=======
  price: number | null;
>>>>>>> create-order-entity

  @ApiProperty()
  @Column("double precision", { name: "globaldiscount", nullable: true, default: 0 })
  globalDiscount: number | null;

  @ApiProperty()
<<<<<<< HEAD
  @Column("boolean", { name: "iscompleted", nullable: true, default: false })
  isCompleted: boolean | null;
=======
  @Column("boolean", { name: "isdeleted", nullable: true, default: false })
  isDeleted: boolean | null;
>>>>>>> create-order-entity

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

<<<<<<< HEAD
  @ApiProperty()
  @Column("boolean", { name: "active", nullable: true, default: true })
  active: boolean | null;
=======
>>>>>>> create-order-entity

}
