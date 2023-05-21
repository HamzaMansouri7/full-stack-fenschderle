import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pasta {
  
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ApiProperty()
  @Column("text", { name: "name", nullable: true})
  name?: string | null;

  @ApiProperty()
  @Column("text", { name: "description", nullable: true })
  description?: string | null;

  @ApiProperty()
  @Column("double precision", { name: "totalprice", nullable: true, default: 0 })
  price?: number | null;

  @ApiProperty()
  @Column("double precision", { name: "globaldiscount", nullable: true, default: 0 })
  discount?: number | null;

  @ApiProperty()
  @Column("boolean", { name: "isdeleted", nullable: true, default: false })
  isDeleted?: boolean | null;

  @ApiProperty()
  @Column("timestamp with time zone", { name: "createdat", nullable: true })
  createdAt?: Date | null;

  @ApiProperty()
  @Column("integer", { name: "createdby", nullable: true })
  createdBy?: number | null;

  @ApiProperty()
  @Column("timestamp with time zone", { name: "updatedat", nullable: true })
  updatedAt?: Date | null;

  @ApiProperty()
  @Column("integer", { name: "updatedby", nullable: true })
  updatedBy?: number | null;

  @ApiProperty({ type: () => Order })
  @ManyToOne(() => Order, order => order.pasta)
  order: Order;
}
