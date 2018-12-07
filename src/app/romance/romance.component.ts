import { Component, OnInit } from '@angular/core';
import { CartshopService } from '../cartshop.service';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {
Romance: Livre[] = [] ;
searchtext: String;
  constructor(private _livreservice: LivreService, private _cartshop: CartshopService) { }

  ngOnInit() {
    this._livreservice.getRomanceBooks().subscribe((response) => this.Romance = response);  }

    addTocarte(livre) {
      this._cartshop.addToCart(livre);
    }

  }


