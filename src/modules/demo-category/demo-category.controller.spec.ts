import { Test, TestingModule } from '@nestjs/testing';
import { DemoCategoryController } from './demo-category.controller';
import { DemoCategoryService } from './demo-category.service';

describe('DemoCategoryController', () => {
  let controller: DemoCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoCategoryController],
      providers: [DemoCategoryService],
    }).compile();

    controller = module.get<DemoCategoryController>(DemoCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
