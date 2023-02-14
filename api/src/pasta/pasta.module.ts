import { Module } from '@nestjs/common';
import { PastaService } from './pasta.service';
import { PastaController } from './pasta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasta } from './entities/pasta.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pasta])],
  controllers: [PastaController],
  providers: [PastaService]
})
export class PastaModule {}
