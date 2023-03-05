import { Module } from '@nestjs/common';
import { SchnitzelService } from './schnitzel.service';
import { SchnitzelController } from './schnitzel.controller';

@Module({
  controllers: [SchnitzelController],
  providers: [SchnitzelService]
})
export class SchnitzelModule {}
