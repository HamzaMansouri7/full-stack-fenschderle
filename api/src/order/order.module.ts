import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order]),TypeOrmModule.forFeature([StripeModule])],
//TYPEORMMODULE YAAML RELATION API ET BASEDE DONNEE
// swagger  ya3ml insertion des valuer dans le base de donneé
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
