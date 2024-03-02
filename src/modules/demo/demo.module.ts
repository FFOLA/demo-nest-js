import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Models } from '@/db/models.db';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [DemoController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [DemoService],
})
export class DemoModule {}
