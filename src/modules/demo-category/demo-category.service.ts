import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDemoCategoryDto } from './dto/create-demo-category.dto';
import { DemoCategory } from './entities/demo-category.entity';

@Injectable()
export class DemoCategoryService {
  constructor(
    @InjectModel(DemoCategory) private demoCategoryModel: typeof DemoCategory,
  ) {}
  create(createDemoCategoryDto: CreateDemoCategoryDto) {
    return this.demoCategoryModel.create({ ...createDemoCategoryDto });
  }

  // ... other CRUD operations
}
