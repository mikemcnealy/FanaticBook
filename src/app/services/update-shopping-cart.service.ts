import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {Book} from '../interface/book'

@Injectable({
  providedIn: 'root'
})
export class UpdateShoppingCartService {
  private showBookDetail = new BehaviorSubject<boolean>(false);
  private cartcount = new BehaviorSubject<number>(0);
  private book = new BehaviorSubject<Book>({book_id:0,Title:'',Description:'',Price:0,Author :'',rating:0,imageURL:''});

  castCart= this.cartcount.asObservable();
  castBook = this.book.asObservable();
  castshowBookDetail = this.showBookDetail.asObservable();

  addSelectBook(book:Book){
    this.book.next(book)

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

  constructor() { }
}
