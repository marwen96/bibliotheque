import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
livre$ ;
  constructor(private http: HttpClient) { }

  getlivres() {
  return this.http.get<Livre []>('http://54.38.33.183:8081/bibliotheque/api/livres');

}
getlivrebyID(id: number) {
   return this.http.get<Livre >('http://54.38.33.183:8081/bibliotheque/api/livres/' + id);
}
}
