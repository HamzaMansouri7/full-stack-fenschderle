import { Injectable } from '@nestjs/common';
import { CreatePayementDto } from './dto/create-payement.dto';
import { UpdatePayementDto } from './dto/update-payement.dto';



@Injectable()
export class PayementService {
  create(createPayementDto: CreatePayementDto) {
    return 'This action adds a new payement';
  }

  findAll() {
    return `This action returns all payement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payement`;
  }

  update(id: number, updatePayementDto: UpdatePayementDto) {
    return `This action updates a #${id} payement`;
  }

 remove(id: number) {
    return `This action removes a #${id} payement`;
  }
//private readonly stripe: Stripe;
//constructor(
 // @InjectRepository(Payment)
 // private paymentRepository: Repository<Payment>,
//) {
 // this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    //apiVersion: '2020-08-27',
  //});
//}

//async createPaymentIntent(
 // createPaymentDto: CreatePaymentDto,
//): Promise<{ client_secret: string }> {
 // const { amount, currency } = createPaymentDto;

 // const paymentIntent = await this.stripe.paymentIntents.create({
   // amount,
   // currency,
 // });

  //return { client_secret: paymentIntent.client_secret };
}

//async updatePayment(
 // paymentId: number,
//  paymentIntentId: string,
//): Promise<Payment> {
 // const payment = await this.paymentRepository.findOne(paymentId);
 // payment.paymentIntentId = paymentIntentId;
 // payment.isPaid = true;
  //await this.paymentRepository.save(payment);
 // return payment;
//}
//}

