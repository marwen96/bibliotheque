import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { get } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$: Observable<firebase.User>;
  constructor(private afauth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = this.afauth.authState ;
   }

  login() {
   // tslint:disable-next-line:prefer-const
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logout() {
    this.afauth.auth.signOut();
  }
}
