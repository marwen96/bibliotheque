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
  constructor(private service: LivreService) { }

  ngOnInit() {
   this.service.getlivres().subscribe((response) => this.livres = response);
  }
  getLivreById(id: number) {
    const singlelivre = this.livres.find(
      (singlelivreObject) => {
        return singlelivreObject.id === id ;
      }
    );
    return singlelivre;
      }
}
