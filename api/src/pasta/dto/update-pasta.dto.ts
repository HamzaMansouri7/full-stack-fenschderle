import { ApiProperty } from '@nestjs/swagger';

export class UpdatePastaDto  {
    @ApiProperty()
    name?: string;
   
   @ApiProperty()
    description?: string;
 
   @ApiProperty()
    price?: number;
 
   @ApiProperty()
    discount?: number;
 
    @ApiProperty()
    isDeleted?: number;

    @ApiProperty()
    updatedAt: Date | null;
  
    @ApiProperty()
    updatedBy: number | null;
}
