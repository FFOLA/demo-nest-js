// src\modules\demo\entities\demo.entity.ts

import { DemoItem } from '@/modules/demo-item/entities/demo-item.entity';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

@Table
export class Demo extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    allowNull: false,
  })
  demoId!: string;

  @Column({
    allowNull: false,
    validate: {
      notEmpty: true, // ensures the string is not empty
    },
  })
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => DemoItem)
  DemoItems: DemoItem[];
}
