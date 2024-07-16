import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactService } from './services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnersModule } from "ngx-spinners"
import { NgxSpinnerComponent,NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    ServicesComponentComponent,
    ContactMeComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
