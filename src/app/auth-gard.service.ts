import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  path: import('c:/Users/marwe/Desktop/testprojet/bibliotheque/node_modules/@angular/router/src/router_state').ActivatedRouteSnapshot[];
  route: import('c:/Users/marwe/Desktop/testprojet/bibliotheque/node_modules/@angular/router/src/router_state').ActivatedRouteSnapshot;

  constructor(private _authservice: AuthService, private router: Router) { }
  canActivate(route, state: RouterStateSnapshot) {
   return this._authservice.user$.pipe(map(user => {
      if (user) { return true ; }
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url}});
      return false ;
    })) ;

  }
}
