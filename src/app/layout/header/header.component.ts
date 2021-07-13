import { Component, OnInit } from '@angular/core';
import{UpdateShoppingCartService} from '../../services/update-shopping-cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart_count:number=6

  login:boolean =false
  constructor(private UpdateShoppingCar:UpdateShoppingCartService) { }

  contact(){}

  ngOnInit(): void {
    this.UpdateShoppingCar.castCart.subscribe((count )=>{
      this.cart_count = count
    })
  }

}
