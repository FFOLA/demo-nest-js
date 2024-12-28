import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DemoModule } from './modules/demo/demo.module';
import { DemoCategoryModule } from './modules/demo-category/demo-category.module';
import { DemoItemModule } from './modules/demo-item/demo-item.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true, // models will be loaded automatically
      synchronize: true, // automatically loaded models will be synchronized

      sync: {
        alter: true, // alter the tables based on schema
      },

      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'forfxhsm_forfonduser',
      password: '1d19sEV3sl])',
      database: 'forfxhsm_demodb',
    }),
    DemoModule,
    DemoCategoryModule,
    DemoItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
