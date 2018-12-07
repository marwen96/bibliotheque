import { CartshopService } from './../cartshop.service';
import { LivreService } from './../livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
Historical: Livre[] = [];
  constructor(private _livreservice: LivreService, private _cartshop: CartshopService) { }

  ngOnInit() {
    this._livreservice.getHistoricalBooks().subscribe((response) => this.Historical = response);  }

addTocarte(livre) {
  this._cartshop.addToCart(livre);
}


}
