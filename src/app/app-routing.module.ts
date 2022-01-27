import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'business-card', component: BusinessCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
