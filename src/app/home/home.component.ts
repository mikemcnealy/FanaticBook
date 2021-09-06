import { AdminService } from './../services/admin.service';
// import { Component, OnInit } from '@angular/core';
// import {Book} from '../interface/book'
// import {BookService} from '../services/book.service';
// import {UpdateShoppingCartService} from '../services/update-shopping-cart.service'
import { Component,OnInit } from '@angular/core';
import {BookService} from '../../app/services/book.service';
//import{AppServiceService} from '../../app/services/app-service.service'
import {UpdateShoppingCartService} from '../../app/services/update-shopping-cart.service'
import {Book} from '../../app/interface/book';
import {MatDialog} from '@angular/material/dialog';
import {BookOrderComponent} from '../../app/book/book-order/book-order.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books=[]
  constructor(private BookService:BookService,upDateShoppingCart:UpdateShoppingCartService) { }
  castshowBookDetail
  ngOnInit(): void {
   this.books = this.BookService.getBookList();
   //console.log(this.books);

  }
 getSelectBook(book_Id:number){
   //this.BookService.getBookByID(book_Id)
 }
}

