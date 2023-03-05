import { Test, TestingModule } from '@nestjs/testing';
import { SalatService } from './salat.service';

describe('SalatService', () => {
  let service: SalatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalatService],
    }).compile();

    service = module.get<SalatService>(SalatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
