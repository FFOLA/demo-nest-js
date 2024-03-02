import { Body, Controller, Post } from '@nestjs/common';
import { DemoCategoryService } from './demo-category.service';
import { CreateDemoCategoryDto } from './dto/create-demo-category.dto';

@Controller('demo-category')
export class DemoCategoryController {
  constructor(private readonly demoCategoryService: DemoCategoryService) {}

  @Post()
  async create(@Body() createDemoCategoryDto: CreateDemoCategoryDto) {
    return this.demoCategoryService.create(createDemoCategoryDto);
  }

  // ... other endpoints
}
