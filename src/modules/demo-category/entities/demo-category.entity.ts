// src\modules\demo-category\entities\demo-category.entity.ts

import { DemoItemCategory } from '@/db/many-to-many/demo-item-category.table';
import { DemoItem } from '@/modules/demo-item/entities/demo-item.entity';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table
export class DemoCategory extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    allowNull: false,
  })
  demoCategoryId!: string;

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true, // ensures the string is not empty
    },
  })
  category: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => DemoItem, () => DemoItemCategory) // this will tie the middle table for many to many relationship
  DemoItems: DemoItem[];
}
