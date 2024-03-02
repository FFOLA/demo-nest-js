import { Module } from '@nestjs/common';
import { DemoCategoryService } from './demo-category.service';
import { DemoCategoryController } from './demo-category.controller';
import { Models } from '@/db/models.db';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [DemoCategoryController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [DemoCategoryService],
})
export class DemoCategoryModule {}
