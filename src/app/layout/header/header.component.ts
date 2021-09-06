import { ContactComponent } from './../../contact/contact.component';
import { Component, OnInit } from '@angular/core';
import{UpdateShoppingCartService} from '../../services/update-shopping-cart.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart_count:number=6

  login:boolean =false
  isAdmin:boolean = false
  constructor(private UpdateShoppingCar:UpdateShoppingCartService,public dialog:MatDialog) { }

  contact(){
    this.dialog.open(ContactComponent)
  }

  longIn_Out(){
    //alert(this.login)
    if(this.login ==true){
      this.isAdmin =false;
      this.login =false;
    }
    else{
      this.login =true;
      this.isAdmin =true;
    }
  }
  ngOnInit(): void {
    this.UpdateShoppingCar.castCart.subscribe((count )=>{
      this.cart_count = count
    })
  }

}
