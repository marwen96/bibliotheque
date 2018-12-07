import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';
import { CartshopService } from '../cartshop.service';

@Component({
  selector: 'app-latestbooks',
  templateUrl: './latestbooks.component.html',
  styleUrls: ['./latestbooks.component.css']
})
export class LatestbooksComponent implements OnInit {

  livres: Livre [];
 searchtext: String;
  constructor(public service: LivreService, private _carteservice: CartshopService) { }

  ngOnInit() {
   this.service.getlivres().subscribe((response) => this.livres = response);
  }
addTocarte(livre) {

  this._carteservice.addToCart(livre); }
}
