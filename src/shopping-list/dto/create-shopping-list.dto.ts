import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

class ShoppingListItemDTO {
  get id(): string {
    return this._id.toString();
  }
  _id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsBoolean()
  bought: boolean;

  @IsOptional()
  quantity: number;
}

export class CreateShoppingListDTO {
  get id(): string {
    return this._id.toString();
  }
  _id: string;

  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  bought: boolean;

  @IsArray()
  list: ShoppingListItemDTO[];
}
