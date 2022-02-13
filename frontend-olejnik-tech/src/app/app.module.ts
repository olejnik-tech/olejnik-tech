import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BusinessCardComponent } from './portfolio/business-card/business-card.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MiaComponent } from './mia/mia.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { PomodoroComponent } from './productivity/pomodoro/pomodoro.component';
import { HabitTrackerComponent } from './productivity/habit-tracker/habit-tracker.component';
import { GamesComponent } from './games/games.component';
import { CvComponent } from './portfolio/cv/cv.component';
import { SocialNetworksComponent } from './portfolio/social-networks/social-networks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    BusinessCardComponent,
    LoginComponent,
    MiaComponent,
    ProductivityComponent,
    PomodoroComponent,
    HabitTrackerComponent,
    GamesComponent,
    CvComponent,
    SocialNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    BreadcrumbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
