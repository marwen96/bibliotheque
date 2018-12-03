import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
livre$ ;
Cart: any = 0 ;
favorite: any = 0 ;
  constructor(private http: HttpClient) { }

  getlivres() {
  return this.http.get<Livre []>('http://54.38.33.183:8081/bibliotheque/api/livres');

}
getlivrebyID(id: number) {
   return this.http.get<Livre >('http://54.38.33.183:8081/bibliotheque/api/livres/' + id);
}
addToCart() {
this.Cart = this.Cart + 1;
}
addToFavorite() {
  this.favorite = this.favorite + 1 ;
}
}
