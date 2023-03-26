import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnacksController } from './snacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snack } from './entities/snack.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Snack])],
  controllers: [SnacksController],
  providers: [SnacksService]
})
export class SnacksModule {}
