import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { DemoCategory } from '../demo-category/entities/demo-category.entity';
import { CreateDemoItemDto } from './dto/create-demo-item.dto';
import { DemoItem } from './entities/demo-item.entity';

@Injectable()
export class DemoItemService {
  constructor(
    @InjectModel(DemoItem) private demoItemModel: typeof DemoItem,
    @InjectModel(DemoCategory) private demoCategoryModel: typeof DemoCategory,
    private sequelize: Sequelize,
  ) {}
  async create(createDemoItemDto: CreateDemoItemDto) {
    // use transaction
    await this.sequelize.transaction(async (t) => {
      const transactionHost = { transaction: t };

      const { DemoCategories, ...demoItemBody } = createDemoItemDto;

      const demoItem = await this.demoItemModel.create(
        { ...demoItemBody },
        transactionHost,
      );

      // get instances of categories
      const categories = await this.demoCategoryModel.findAll({
        where: { demoCategoryId: DemoCategories },
      });

      // modify entries using the $set to the relationship table
      await demoItem.$set('DemoCategories', categories, transactionHost);
    });
  }
}
