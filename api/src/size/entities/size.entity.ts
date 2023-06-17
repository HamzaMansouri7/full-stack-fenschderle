import { ApiProperty } from "@nestjs/swagger";
import { Pizza } from "src/pizza/entities/pizza.entity";
import { Schnitzel } from "src/schnitzel/entities/schnitzel.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Size {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
    
    
    @ApiProperty()
    @Column("text", { name: "name", nullable: false })
    name: string;
   
   
    @ApiProperty()
    @Column("text", { name: "value", nullable: false })
    value: string;

    @ApiProperty()
    @Column("text", { name: "description", nullable: false})
    description: string | null;
    
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
    
    @ApiProperty({ type: () => Pizza, isArray: true })
    @OneToMany(() => Pizza, pizza => pizza.sizeId)
    pizzas: Pizza[];

    @ApiProperty({ type: () => Schnitzel, isArray: true })
    @OneToMany(() => Schnitzel, pizza => pizza.sizeid)
    schnitzels: Schnitzel[];
    
}
