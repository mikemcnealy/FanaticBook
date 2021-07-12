import { BookService } from './../../services/book.service';
import {UpdateShoppingCartService} from '../../services/update-shopping-cart.service'
import { Component, OnInit ,Input } from '@angular/core';
import{Book} from '../../interface/book';
//import { Console } from 'console';

@Component({
  selector: 'app-book-design',
  templateUrl: './book-design.component.html',
  styleUrls: ['./book-design.component.css']
})
export class BookDesignComponent implements OnInit {
   _book:Book
   _book1:Book
  constructor(private book:BookService,private updateCart:UpdateShoppingCartService) { }
    @Input('Book_ID') public Book_ID:number;
    @Input('Author') public Author:string;
    @Input('Title') public Title:string;
    @Input('Price') public Price:number;
    @Input('imageURL') public imageURL:string;
    updateCartCount(id:number){
     //this._book = this.book.getBookByID(id);
     this.updateCart.addSelectBook(this.book.getBookByID(id),1)
     //this.updateCart.castBook
     this._book1 = this.updateCart.getSelectBook()

     this.updateCart.showSelectBook(true)

     console.log(this._book1)
    }

    addToCart(id:number){
      this.updateCart.addSelectBook(this.book.getBookByID(id),1)
      //this.book.getBookByID(id);
      //this.updateCart.addSelectBook()
    }
  ngOnInit(): void {
  }

}
