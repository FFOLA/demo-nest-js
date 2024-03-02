import { Test, TestingModule } from '@nestjs/testing';
import { DemoCategoryService } from './demo-category.service';

describe('DemoCategoryService', () => {
  let service: DemoCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoCategoryService],
    }).compile();

    service = module.get<DemoCategoryService>(DemoCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
