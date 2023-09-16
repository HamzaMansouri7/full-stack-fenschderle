import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PastaModule } from './pasta/pasta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaModule } from './pizza/pizza.module';
import { SchnitzelModule } from './schnitzel/schnitzel.module';
import { SnacksModule } from './snacks/snacks.module';
import { SalatModule } from './salat/salat.module';
import { OrderModule } from './order/order.module';
import { SizeModule } from './size/size.module';
import { ExtraModule } from './extra/extra.module';
import { PaiementModule } from './paiement/paiement.module';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ 
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:'postgres',
        password: 'postgres',
        database: 'fensh',
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
    SizeModule,
    ExtraModule,
    PaiementModule,
    StripeModule.forRoot(process.env.STRIPE_KEY, {apiVersion:'2022-11-15'}),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
