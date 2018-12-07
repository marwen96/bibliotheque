import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from './livre';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LivreService {


  constructor(private http: HttpClient) { }

  getlivres() {
  return this.http.get<Livre []>('http://localhost:3000/livres');

}
getlivrebyID(id: number) {
   return this.http.get<Livre >('http://localhost:3000/livres/' + id);
}
getCrimeBooks() {
  return this.http.get<Livre []>('http://localhost:3000/livres?categorie=crime');
}
getHistoricalBooks() {
  return this.http.get<Livre []>('http://localhost:3000/livres?categorie=Historique');

}
getRomanceBooks() {
  return this.http.get<Livre []>('http://localhost:3000/livres?categorie=romance');
}
getBiographyBooks() {
  return this.http.get<Livre []>('http://localhost:3000/livres?categorie=biographie');
}

}
