import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pizza")
export class Pasta {
  
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ApiProperty()
  @Column("text", { name: "reference", nullable: true})
  reference: string | null;

  @ApiProperty()
  @Column("double precision", { name: "deliveryprice", nullable: true, default: 0 })
  deliveryPrice: number | null;

  @ApiProperty()
  @Column("double precision", { name: "timbrePrice", nullable: true, default: 0 })
  timbrePrice: number | null;

  @ApiProperty()
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @ApiProperty()
  @Column("double precision", { name: "totalprice", nullable: true, default: 0 })
  totalPrice: number | null;

  @ApiProperty()
  @Column("double precision", { name: "globaldiscount", nullable: true, default: 0 })
  globalDiscount: number | null;

  @ApiProperty()
  @Column("boolean", { name: "iscompleted", nullable: true, default: false })
  isCompleted: boolean | null;

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

  @ApiProperty()
  @Column("boolean", { name: "active", nullable: true, default: true })
  active: boolean | null;

}
