import { Test, TestingModule } from '@nestjs/testing';
import { SchnitzelController } from './schnitzel.controller';
import { SchnitzelService } from './schnitzel.service';

describe('SchnitzelController', () => {
  let controller: SchnitzelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchnitzelController],
      providers: [SchnitzelService],
    }).compile();

    controller = module.get<SchnitzelController>(SchnitzelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
