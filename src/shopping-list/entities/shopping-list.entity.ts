import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  bought: boolean;
}

@Schema()
export class ShoppingList extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  bought: boolean;

  @Prop({
    required: false,
    type: [{ id: String, name: String, quantity: Number, bought: Boolean }],
  })
  list: ShoppingListItem[];
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);
