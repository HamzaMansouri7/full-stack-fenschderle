import { Module } from '@nestjs/common';
import { PastaService } from './pasta.service';
import { PastaController } from './pasta.controller';

@Module({
  controllers: [PastaController],
  providers: [PastaService]
})
export class PastaModule {}
