import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastaModule } from './pasta/pasta.module';
<<<<<<< HEAD

@Module({
  imports: [ PastaModule],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PizzaModule } from './pizza/pizza.module';
import { SchnitzelModule } from './schnitzel/schnitzel.module';
import { SnacksModule } from './snacks/snacks.module';
import { SalatModule } from './salat/salat.module';
import { OrderModule } from './order/order.module';
import { PayementModule } from './payement/payement.module';


@Module({
  imports: [ 
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:'postgres',
        password: 'postgres',
        database: 'hamza',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot(),
    PizzaModule,
    PastaModule ,
    SchnitzelModule,
    SnacksModule,
    SalatModule,
    OrderModule,
    PayementModule],
>>>>>>> create-order-entity
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
