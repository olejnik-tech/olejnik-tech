import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' }},
  {path: 'portfolio', component: PortfolioComponent, data: { breadcrumb: 'Portfolio'}},
  {path: 'business-card', component: BusinessCardComponent, data: { breadcrumb: 'BusinessCard'}},
  {path: 'login', component: LoginComponent, data: { breadcrumb: 'Login'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
