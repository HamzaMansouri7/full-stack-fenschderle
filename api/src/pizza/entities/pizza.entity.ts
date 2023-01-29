// import { ApiProperty } from "@nestjs/swagger";
// import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// @Entity("pizza")
// export class PizzaEntity {
  
//     @ApiProperty()
//     @PrimaryGeneratedColumn({ type: "integer", name: "id" })
//     id: number;

//     @ApiProperty()
//     @Column("varchar", { name: "name", nullable: false, length: 50 })
//     name: string;

//     @ApiProperty()
//     @Column("text", { name: "description", nullable: true })
//     description: string | null;

//     @ApiProperty()
//     @Column("double precision", { name: "price", nullable: false })
//     price: number;

//     @ApiProperty()
//     @ManyToOne(() => PizzaSizeEntity, (pizzaSize: PizzaSizeEntity) => pizzaSize.id)
//     @JoinColumn({ name: "pizzasizeid" })
//     pizzaSizeId: number;

//     @ApiProperty()
//     @ManyToOne(() => PizzaTypeEntity, (pizzaType: PizzaTypeEntity) => pizzaType.id)
//     @JoinColumn({ name: "pizzatypeid" })
//     pizzaTypeId: number;
// }