import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Schnitzel {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ApiProperty()
    @Column("text", { name: "name", nullable: true})
    name: string | null;

    @ApiProperty()
    @Column("text", { name: "description", nullable: true })
    description: string | null;
    
    @ApiProperty()
    @Column("double precision", { name: "price", nullable: true, default: 0 })
    price: number | null;
    
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
}
