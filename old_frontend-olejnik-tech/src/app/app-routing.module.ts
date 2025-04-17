import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardComponent } from './portfolio/business-card/business-card.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MiaComponent } from './mia/mia.component';
import { LoginComponent } from './login/login.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { PomodoroComponent } from './productivity/pomodoro/pomodoro.component';
import { HabitTrackerComponent } from './productivity/habit-tracker/habit-tracker.component';
import { GamesComponent } from './games/games.component';
import { CvComponent } from './portfolio/cv/cv.component';
import { SocialNetworksComponent } from './portfolio/social-networks/social-networks.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' }},
  {path: 'portfolio', component: PortfolioComponent, data: { breadcrumb: 'Portfolio'},
    children: [
    {path: 'business-card', component: BusinessCardComponent, data: { breadcrumb: 'BusinessCard'}},
    {path: 'cv', component: CvComponent, data: { breadcrumb: 'CV'}},
    {path: 'social-networks', component: SocialNetworksComponent, data: { breadcrumb: 'social-networks'}}
    ]},
  {path: 'mia', component: MiaComponent, data: { breadcrumb: 'Mia'}},
  {path: 'login', component: LoginComponent, data: { breadcrumb: 'Login'}},
  {path: 'productivity', component: ProductivityComponent, data: { breadcrumb: 'Productivity' },
    children: [
      {path: 'pomodoro', component: PomodoroComponent, data: {breadcrumb: 'Pomodoro'}},
      {path: 'habit-tracker', component: HabitTrackerComponent, data: {breadcrumb: 'Habit Tracker'}}
    ]},
  {path: 'games', component: GamesComponent, data: { breadcrumb: 'Games'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
