import { Injectable } from '@nestjs/common';
// import { CreatePaiementDto } from './dto/create-paiement.dto';
// import { UpdatePaiementDto } from './dto/update-paiement.dto';

@Injectable()
export class PaiementService {
  create(createPaiementDto: any) {
    return 'This action adds a new paiement';
  }

  findAll() {
    return `This action returns all paiement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paiement`;
  }

  update(id: number, updatePaiementDto: any) {
    return `This action updates a #${id} paiement`;
  }

  remove(id: number) {
    return `This action removes a #${id} paiement`;
  }
}
