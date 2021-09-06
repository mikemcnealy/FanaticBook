import { Injectable } from '@angular/core';
import {UpdateShoppingCartService} from '../services/update-shopping-cart.service'
import{Book} from '../interface/book';
import {storeAction} from '../class/storeAction'
import {API} from '../../app/services/API.service'


@Injectable({
  providedIn: 'root'
})
export class BookService {
constructor(private api:API){
 let store = new storeAction();
 let newBook:Book;

}
  booklist:any;
  bookList=[];
  book:Book

  getBookList(): Book[]{

   // this.api.Get('books',1);
   // console.log(this.api.Get('books'));
 //const store = new storeAction();

    this.booklist =this.api.Get('books').subscribe(data=>{
      console.log('length');
      console.log(data.length);
      if(data.length > 1){
        for(let i=0;i<= data.length;i++){
          this.bookList.push({
            book_id:data[i].id,
            Title:data[i].Title,
            Description:data[i].Description,
            Price:data[i].price,
            imageURL:data[i].imageURL,
            Author:data[i].author,
            rating:data[i].rating
         })
         }
      }else{
        this.bookList.push({
          book_id:data.id,
          Title:data.Title,
          Description:data.Description,
          Price:data.price,
          imageURL:data.imageURL,
          Author:data.author,
          rating:data.rating
       })
      }
    })

    return   this.bookList
  }
  getBookByID(book_ID:number):Book{
    console.log('book_ID')
    var id =book_ID
   // console.log(this.bookList[book_ID])
  var bookIndex:number=0
 this.book = this.bookList.find((b,id)=>{
    if(b.book_id ===book_ID){
      return true
    }
     // bookIndex =book_ID;

  })
  //console.log(this.book)
    return this.book;
  }
  AddBok(book:Book){
    this.bookList.push(book.book_id,book.Title,book.Description,book.Price,book.imageURL,book.Author,book.rating)
  }
  Login(user:string,PWD:string){
    if(user !=null && PWD !=null){

    }
  }
  CreateLogin(){}
}
