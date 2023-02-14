import { Module } from '@nestjs/common';
import { SalatService } from './salat.service';
import { SalatController } from './salat.controller';

@Module({
  controllers: [SalatController],
  providers: [SalatService]
})
export class SalatModule {}
