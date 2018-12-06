import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListelivreComponent } from './listelivre/listelivre.component';
import { BannerComponent } from './banner/banner.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SliderComponent } from './slider/slider.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SinglelivreComponent } from './singlelivre/singlelivre.component';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';



const appRoutes: Routes = [
{path: 'contact', component: ContactComponent},
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'livres', component: ListelivreComponent},
{path: 'livres/:id', component: SinglelivreComponent},
{path: 'login', component: LoginComponent},
{path: 'cartshop', component: CartShoppingComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListelivreComponent,
    BannerComponent,
    SearchbarComponent,
    SliderComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    SinglelivreComponent,
    LoginComponent,
    CartShoppingComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
