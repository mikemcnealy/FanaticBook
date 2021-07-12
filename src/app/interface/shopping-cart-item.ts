import { Data } from "@angular/router";

export interface ShoppingCartItem {
  user_ID?:number;
  book_id?:number;
  rderDate?:Data;
  Quantity?:number
}
