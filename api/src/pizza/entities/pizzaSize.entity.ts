import { ApiProperty } from "@nestjs/swagger";
import { PizzaEntity } from "./pizza.entity";

import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("pizza_size")
export class PizzaSizeEntity {

@ApiProperty()
@PrimaryGeneratedColumn({ type: "integer", name: "id" })
id: number;

@ApiProperty()
@Column("character varying", { name: "name", nullable: true, length: 50 })
name: string | null;

@ApiProperty()
@Column("double precision", { name: "price", nullable: true })
price: number | null;

@ApiProperty()
@Column("timestamp with time zone", { name: "updatedat", nullable: true })
updatedAt: Date | null;

@ApiProperty()
@Column("timestamp with time zone", { name: "createdat", nullable: true })
createdAt: Date | null;

@ApiProperty()
@Column("integer", { name: "updatedby", nullable: true })
updatedBy: number | null;

@ApiProperty()
@Column("integer", { name: "createdby", nullable: true })
createdBy: number | null;

@ApiProperty()
@Column("boolean", { name: "active", nullable: true, default: () => "true" })
active: boolean | null;

@ApiProperty()
@OneToMany(() => PizzaEntity, (pizza: PizzaEntity) => pizza.pizzaSizeId)
pizzas: PizzaEntity[];

@BeforeInsert()
eventCreatedAt() {
    this.createdAt = new Date();
}

@BeforeUpdate()
eventUpdatedAt() {
    this.updatedAt = new Date();
}
}
