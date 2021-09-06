import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {UpdateShoppingCartService} from '../services/update-shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:UpdateShoppingCartService) { }
  booksList =<any>[];
  ngOnInit(): void {
    this.booksList = this.cart.getSelectBook
    alert(this.booksList.Title)
  }

}
