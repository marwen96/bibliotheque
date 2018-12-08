import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';
import { CartshopService } from '../cartshop.service';

@Component({
  selector: 'app-bestoffer',
  templateUrl: './bestoffer.component.html',
  styleUrls: ['./bestoffer.component.css']
})
export class BestofferComponent implements OnInit {
  livres: Livre [];
  searchtext: String;
   constructor(public service: LivreService, private _carteservice: CartshopService) { }

   ngOnInit() {
    this.service.getBestOffer().subscribe((response) => this.livres = response);
   }
 addTocarte(livre) {

  this._carteservice.addToCart(livre); }
 }

