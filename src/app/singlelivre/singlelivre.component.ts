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

  single: Livre;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private service: LivreService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getlivrebyID(id).subscribe((response) => this.single = response);

  }

}
