import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoCategoryDto } from './create-demo-category.dto';

export class UpdateDemoCategoryDto extends PartialType(CreateDemoCategoryDto) {}
