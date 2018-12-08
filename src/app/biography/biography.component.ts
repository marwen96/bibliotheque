import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { CartshopService } from '../cartshop.service';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  constructor(private _livreservice: LivreService, private _cartshop: CartshopService, public _authservice: AuthService) { }
Biography: Livre[] = [] ;
searchtext: String;
  ngOnInit() {
    this._livreservice.getBiographyBooks().subscribe((response) => this.Biography = response);
  }
  addTocarte(livre) {
    this._cartshop.addToCart(livre);
  }
}
