import { Module } from '@nestjs/common';
import { SalatService } from './salat.service';
import { SalatController } from './salat.controller';
import { Salat } from './entities/salat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Salat])],
  controllers: [SalatController],
  providers: [SalatService]
})
export class SalatModule {}
