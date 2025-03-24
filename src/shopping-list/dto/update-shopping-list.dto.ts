import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingListDTO } from './create-shopping-list.dto';

export class UpdateShoppingListDto extends PartialType(CreateShoppingListDTO) {}
