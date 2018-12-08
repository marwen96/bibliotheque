import { AuthService } from './../auth.service';
import { CartshopService } from './../cartshop.service';
import { LivreService } from './../livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {
Crimes: Livre[] = [];
searchtext: String;
  constructor(private _livreservice: LivreService, private _cartshop: CartshopService, public _authservice: AuthService) { }

  ngOnInit() {
    this._livreservice.getCrimeBooks().subscribe((response) => this.Crimes = response);
  }
addTocarte(livre) {
  this._cartshop.addToCart(livre);
}
}
