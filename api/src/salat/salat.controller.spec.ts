import { Test, TestingModule } from '@nestjs/testing';
import { SalatController } from './salat.controller';
import { SalatService } from './salat.service';

describe('SalatController', () => {
  let controller: SalatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalatController],
      providers: [SalatService],
    }).compile();

    controller = module.get<SalatController>(SalatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
