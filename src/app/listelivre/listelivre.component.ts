import { AuthService } from './../auth.service';
import { CartshopService } from './../cartshop.service';

import { LivreService } from './../livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';

@Component({
  selector: 'app-listelivre',
  templateUrl: './listelivre.component.html',
  styleUrls: ['./listelivre.component.css']
})
export class ListelivreComponent implements OnInit {
 livres: Livre [];
 searchtext: String;
  constructor(public service: LivreService, private _carteservice: CartshopService, public _authservice: AuthService) { }

  ngOnInit() {
   this.service.getlivres().subscribe((response) => this.livres = response);
  }
addTocarte(livre) {

  this._carteservice.addToCart(livre); }
}
