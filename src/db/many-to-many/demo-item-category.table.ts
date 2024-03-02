import { DemoCategory } from '@/modules/demo-category/entities/demo-category.entity';
import { DemoItem } from '@/modules/demo-item/entities/demo-item.entity';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class DemoItemCategory extends Model {
  @ForeignKey(() => DemoItem)
  @Column
  demoItemId: string;

  @ForeignKey(() => DemoCategory)
  @Column
  demoCategoryId: string;
}
