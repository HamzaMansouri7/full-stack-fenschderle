import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Size {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
  
    @ApiProperty()
    @Column("number", { name: "taille1", nullable: true})
    taille1: number | null;
    
    @ApiProperty()
    @Column("number", { name: "taille2", nullable: true})
    taille2: number | null;

    @ApiProperty()
    @Column("number", { name: "taille3", nullable: true})
    taille3: number | null;
    
    @ApiProperty()
    @Column("number", { name: "taille3", nullable: true})
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
