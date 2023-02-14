import { Test, TestingModule } from '@nestjs/testing';
import { SchnitzelService } from './schnitzel.service';

describe('SchnitzelService', () => {
  let service: SchnitzelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchnitzelService],
    }).compile();

    service = module.get<SchnitzelService>(SchnitzelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
