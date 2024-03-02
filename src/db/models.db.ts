import { DemoCategory } from '@/modules/demo-category/entities/demo-category.entity';
import { DemoItem } from '@/modules/demo-item/entities/demo-item.entity';
import { Demo } from '@/modules/demo/entities/demo.entity';
import { DemoItemCategory } from './many-to-many/demo-item-category.table';

export const Models = [Demo, DemoItem, DemoCategory, DemoItemCategory];
