import { Book } from './../interface/book';
import { Injectable } from '@angular/core';
import {ShoppingCartItem} from '../../app/interface/shopping-cart-item'
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UpdateShoppingCartService {
  private showBookDetail = new BehaviorSubject<boolean>(false);
  private cartcount = new BehaviorSubject<number>(0);
  private book = new BehaviorSubject<Book>({book_id:0,Title:'',Description:'',Price:0,Author :'',rating:0,imageURL:''});
  private shoppint_Item=[]
//getBookList(): Book[]
  castCart= this.cartcount.asObservable();
  castBook = this.book.asObservable();
  castshowBookDetail = this.showBookDetail.asObservable();

  addSelectBook(book:Book,count:number){
    this.updateCartCount(this.getCartCount()+count)
    this.shoppint_Item.push(book)
    //console.log(this.shoppint_Item)
  }

  getSelectBook():Book{
    console.log(this.book)
    return this.book.value;
  }

  showSelectBook(status:boolean){
    this.showBookDetail.next(status)
  }

  updateCartCount(count:number)
  {
    this.cartcount.next(count);
  }
  getCartCount(){
    return this.cartcount.value;
  }

  getCarItem():[]{
   return <any>this.shoppint_Item;
  }

  constructor() { }
}
