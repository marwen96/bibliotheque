
import { Livre } from './livre';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartshopService {

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
