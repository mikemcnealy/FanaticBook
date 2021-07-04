import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book'
import {BookService} from '../services/book.service';
import {UpdateShoppingCartService} from '../services/update-shopping-cart.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books=[]
  constructor(private BookService:BookService,upDateShoppingCart:UpdateShoppingCartService) { }

  ngOnInit(): void {
   this.books = this.BookService.getBookList();
  }
 getSelectBook(book_Id:number){
   this.BookService.getBookByID(book_Id)
 }
}

