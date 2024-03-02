import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDemoDto } from './dto/create-demo.dto';
import { Demo } from './entities/demo.entity';

@Injectable()
export class DemoService {
  constructor(@InjectModel(Demo) private demoModel: typeof Demo) {}
  create(createDemoDto: CreateDemoDto) {
    return this.demoModel.create({ ...createDemoDto });
  }

  // ... other CRUD operations
}
