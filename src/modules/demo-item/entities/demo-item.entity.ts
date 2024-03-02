// src\modules\demo-item\entities\demo-item.entity.ts

import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Demo } from '@/modules/demo/entities/demo.entity';
import { DemoCategory } from '@/modules/demo-category/entities/demo-category.entity';
import { DemoItemCategory } from '@/db/many-to-many/demo-item-category.table';

@Table
export class DemoItem extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    allowNull: false,
  })
  demoItemId!: string;

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true, // ensures the string is not empty
    },
  })
  itemName: string;

  @ForeignKey(() => Demo)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  demoId: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsTo(() => Demo)
  Demo: Demo;

  @BelongsToMany(() => DemoCategory, () => DemoItemCategory) // this will tie the middle table for many to many relationship
  DemoCategories: DemoCategory[];
}
