import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';

import { ProfileService } from './profiles/profile.service'

@NgModule(
  {
    declarations: [
      AppComponent,
      HomeComponent,
      ProfilesComponent,
      ProfileComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'profiles',
          component: ProfilesComponent,
          resolve: {
            users: ProfileService
          },
          data: {
            title: 'angular'
          },
        },
        {
          path: 'profile/:id',
          component: ProfileComponent
        },
        {
          path: '**',
          redirectTo: 'home'
        }
      ])
    ],
    providers: [ProfileService],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
