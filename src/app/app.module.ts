import { AuthGardService } from './auth-gard.service';
import { LatestPipe } from './latest.pipe';
import { FilterPipe } from './../filter.pipe';
import { HistoricalComponent } from './historical/historical.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListelivreComponent } from './listelivre/listelivre.component';
import { BannerComponent } from './banner/banner.component';

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
import { CrimeComponent } from './crime/crime.component';
import { BiographyComponent } from './biography/biography.component';
import { RomanceComponent } from './romance/romance.component';
import { HttpXsrfInterceptor } from '@angular/common/http/src/xsrf';

import { LatestbooksComponent } from './latestbooks/latestbooks.component';
import { BestofferComponent } from './bestoffer/bestoffer.component';



const appRoutes: Routes = [
{path: 'contact', component: ContactComponent},
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'livres', component: ListelivreComponent},
{path: 'livres/:id', component: SinglelivreComponent},
{path: 'login', component: LoginComponent},
{path: 'cartshop', component: CartShoppingComponent , canActivate: [AuthGardService]},
{path: 'categorie/crime', component: CrimeComponent},
{path: 'categorie/biography', component: BiographyComponent},
{path: 'categorie/romance', component: RomanceComponent},
{path: 'categorie/historical', component: HistoricalComponent },
{path: 'latest', component: LatestbooksComponent},
{path: 'bestoffer', component: BestofferComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListelivreComponent,
    BannerComponent,
    SliderComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    SinglelivreComponent,
    LoginComponent,
    CartShoppingComponent,
    CrimeComponent,
    BiographyComponent,
    RomanceComponent,
    HistoricalComponent,

    FilterPipe,
    LatestbooksComponent,
    LatestPipe,
    BestofferComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
