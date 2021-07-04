import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartcount:number
  login:boolean =true
  constructor() { }

  contact(){}

  ngOnInit(): void {
  }

}
