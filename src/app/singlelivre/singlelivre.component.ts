import { CartshopService } from './../cartshop.service';
import { Observable } from 'rxjs';
import { ListelivreComponent } from './../listelivre/listelivre.component';

import { LivreService } from './../livre.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from '../livre';

@Component({
  selector: 'app-singlelivre',
  templateUrl: './singlelivre.component.html',
  styleUrls: ['./singlelivre.component.css']
})
export class SinglelivreComponent implements OnInit {
name: String ;
single: Livre = null;
livrescrime: Livre [];
livreshistorique: Livre[];
livresromance: Livre[];
livresbiography: Livre[];


  constructor(private _cartshopservice: CartshopService, private service: LivreService, private route: ActivatedRoute) { }

  ngOnInit() {
     const id = this.route.snapshot.params['id'];
     this.service.getlivrebyID(id).subscribe((response) => this.single = response);
      this.service.getCrimeBooks().subscribe((response) => this.livrescrime = response);
      this.service.getRomanceBooks().subscribe((response) => this.livresromance = response);
      this.service.getBiographyBooks().subscribe((response) => this.livresbiography = response);
      this.service.getHistoricalBooks().subscribe((response) => this.livreshistorique = response);
    }
addTocarte(livre) {

this._cartshopservice.addToCart(livre);
}

}
