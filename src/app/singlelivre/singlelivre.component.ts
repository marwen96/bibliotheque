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
single: Observable<Livre> ;
  constructor(private service: LivreService, private route: ActivatedRoute) { }

  ngOnInit() {
     const id = this.route.snapshot.params['id'];
     this.single = this.service.getlivrebyID(id);

  }
addToCart() {
this.service.addToCart();
}

}
