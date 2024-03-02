import { Body, Controller, Post } from '@nestjs/common';
import { DemoItemService } from './demo-item.service';
import { CreateDemoItemDto } from './dto/create-demo-item.dto';

@Controller('demo-item')
export class DemoItemController {
  constructor(private readonly demoItemService: DemoItemService) {}

  @Post()
  async create(@Body() createDemoItemDto: CreateDemoItemDto) {
    return this.demoItemService.create(createDemoItemDto);
  }

  // ... other endpoints
}
