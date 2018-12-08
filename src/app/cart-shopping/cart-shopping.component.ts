import { Component, OnInit } from '@angular/core';

import { CartshopService } from '../cartshop.service';
import { Livre } from '../livre';


@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.css']
})
export class CartShoppingComponent implements OnInit {
Cartes: Livre [] = [] ;
total: any = 0;
  constructor(private _cartshopservice: CartshopService) { }

  ngOnInit() {
this.Cartes = this._cartshopservice.Cartes ;
  }
remove(carte) {
  this._cartshopservice.remove(carte);
}
calcultotal() {

}
}
