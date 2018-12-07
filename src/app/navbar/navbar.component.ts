import { CartshopService } from './../cartshop.service';
import { CartShoppingComponent } from './../cart-shopping/cart-shopping.component';
import { LivreService } from './../livre.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
keyword: string ;
  constructor(public _authservice: AuthService,
     public service: LivreService, public _cartshopservice: CartshopService) {

   }

  ngOnInit() {
  }
logout() {
this._authservice.logout();
}
filterbooks() {

}
}
