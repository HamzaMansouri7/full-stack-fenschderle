import { Module } from '@nestjs/common';
import { SchnitzelService } from './schnitzel.service';
import { SchnitzelController } from './schnitzel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schnitzel } from './entities/schnitzel.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Schnitzel])],
  controllers: [SchnitzelController],
  providers: [SchnitzelService]
})
export class SchnitzelModule {}
