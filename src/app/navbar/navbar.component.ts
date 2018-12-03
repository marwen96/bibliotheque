import { LivreService } from './../livre.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authservice: AuthService, public service: LivreService) {

   }

  ngOnInit() {
  }
logout() {
this._authservice.logout();
}

}
