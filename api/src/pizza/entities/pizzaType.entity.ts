import { ApiProperty } from "@nestjs/swagger";
import { PizzaEntity } from "./pizza.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("pizzatype")
export class PizzaTypeEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
    
    @ApiProperty()
    @Column("varchar", { name: "name", length: 100 })
    name: string;
    
    @ApiProperty()
    @OneToMany(() => PizzaEntity, (pizza: PizzaEntity) => pizza.pizzaTypeId)
    pizzas: PizzaEntity[];
}