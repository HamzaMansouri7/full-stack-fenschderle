import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastaModule } from './pasta/pasta.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ PastaModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
