
import { Injectable } from '@angular/core';
import {UpdateShoppingCartService} from '../services/update-shopping-cart.service'
import{Book} from '../interface/book'


@Injectable({
  providedIn: 'root'
})
export class BookService {


  bookList=[];
  book:Book
  getBookList(): Book[]{
    this.bookList.push({book_id:1,Title:'PET Sematary',Description:'',Price:50,imageURL:'../../assets/images/book1.png',Author:'Stephen King',rating:4});
    this.bookList.push({book_id:2,Title:'Just One Bite',Description:'',Price:10,imageURL:'../../assets/images/book2.png',Author:'Jack Heath',rating:4});
    this.bookList.push({book_id:3,Title:'Gilly Macmillan',Description:'',Price:11,imageURL:'../../assets/images/book3.png',Author:'Jack Heath',rating:4});
    this.bookList.push({book_id:4,Title:'Just One Bite',Description:'',Price:30,imageURL:'../../assets/images/book4.png',Author:'Jack Heath',rating:4});
    this.bookList.push({book_id:5,Title:'Dark Tower-The Gunslinger',Description:'',Price:19,imageURL:'../../assets/images/book5.png',Author:'Stephen King',rating:3});
    this.bookList.push({book_id:6,Title:'Before the Devil Fell',Description:'',Price:10,imageURL:'../../assets/images/book7.png',Author:'Neil Olson',rating:5});

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
}
