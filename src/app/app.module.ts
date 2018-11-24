import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

const appRoutes: Routes = [
{path: 'contact', component: ContactComponent},
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'livres', component: ListelivreComponent},
{path: 'livres/:id', component: SinglelivreComponent}

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
