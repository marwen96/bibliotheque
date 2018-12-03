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
single: Livre = null ;

  constructor(private service: LivreService, private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.service.getlivrebyID().subscribe((response) => this.single = response);

  }

}
