
import { Livre } from './livre';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartshopService {
carte: any = 0 ;
Cartes: Livre[] = [];
  constructor() { }

  addToCart(livre) {

this.Cartes.push(livre);

  }
  remove(carte) {
    const index = this.Cartes.indexOf(carte, 0);
    this.Cartes.splice(index, 1);
  }

}
