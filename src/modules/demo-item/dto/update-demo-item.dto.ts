import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoItemDto } from './create-demo-item.dto';

export class UpdateDemoItemDto extends PartialType(CreateDemoItemDto) {}
