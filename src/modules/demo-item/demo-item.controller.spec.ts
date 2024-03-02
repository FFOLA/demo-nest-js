import { Test, TestingModule } from '@nestjs/testing';
import { DemoItemController } from './demo-item.controller';
import { DemoItemService } from './demo-item.service';

describe('DemoItemController', () => {
  let controller: DemoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoItemController],
      providers: [DemoItemService],
    }).compile();

    controller = module.get<DemoItemController>(DemoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
