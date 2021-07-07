import { Component,OnInit } from '@angular/core';
import {BookService} from '../app/services/book.service';
import {UpdateShoppingCartService} from '../app/services/update-shopping-cart.service'
import {Book} from '../app/interface/book';
import {MatDialog} from '@angular/material/dialog';
import {BookOrderComponent} from '../app/book/book-order/book-order.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FanaticBook';
 // books:Book=[]
  book:Book;
  image:string;
  bookTitle:string;
  Author:string;
  Price:number;

  close_window:Boolean=false
 constructor(private bookService:BookService,private UpdateShopping:UpdateShoppingCartService,private dialog:MatDialog){

 // this.books=this.bookService.getBookList();
 }

 ngOnInit(): void {
   this.UpdateShopping.castshowBookDetail.subscribe((show)=>{

    if(show ===true){
      this.close_window=show
     this.book = <Book>this.UpdateShopping.getSelectBook();
     console.log(this.book)
     this.image =this.book.imageURL
     this.bookTitle =this.book.Title
    //this.image = '../../assets/images/book4.png'
    this.UpdateShopping.castBook

    }else{
      this.close_window=false
    }
   })
 }
 CloseShowBookDetail(){
    this.UpdateShopping.showSelectBook(false)
 }
}


