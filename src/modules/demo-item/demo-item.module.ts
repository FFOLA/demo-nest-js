import { Module } from '@nestjs/common';
import { DemoItemService } from './demo-item.service';
import { DemoItemController } from './demo-item.controller';
import { Models } from '@/db/models.db';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [DemoItemController],
  imports: [SequelizeModule.forFeature(Models)],
  providers: [DemoItemService],
})
export class DemoItemModule {}
