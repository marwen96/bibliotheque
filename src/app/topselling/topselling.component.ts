import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';
import { CartshopService } from '../cartshop.service';

@Component({
  selector: 'app-topselling',
  templateUrl: './topselling.component.html',
  styleUrls: ['./topselling.component.css']
})
export class TopsellingComponent implements OnInit {

  livres: Livre [];
 searchtext: String;
  constructor(public service: LivreService, private _carteservice: CartshopService) { }

  ngOnInit() {
   this.service.getRomanceBooks().subscribe((response) => this.livres = response);
  }
addTocarte(livre) {

  this._carteservice.addToCart(livre); }

}
