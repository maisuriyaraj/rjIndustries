import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';

const routes: Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'RJ/services',component:ServicesComponentComponent},
  {path:'RJ/contact',component:ContactMeComponent},
  {path:'RJ/about',component:AboutComponent},
  {path:'RJ/portfolio',component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
