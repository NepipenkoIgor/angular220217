import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LibraryModule } from './library/library.module';
import { UserCardComponent } from './user-card/user-card.component';
import { DelayDirective } from './delay.directive';
import { UserFilterPipe } from './user-filter.pipe';

import { UsersService } from './users.service';
import { DOMAIN, DOMAIN_TOKEN } from './config';



@NgModule(
  {
    declarations: [
      AppComponent,
      UserCardComponent,
      DelayDirective,
      UserFilterPipe
    ],
    imports: [
      BrowserModule,
      LibraryModule,
      HttpModule
    ],
    providers: [
      UsersService,
      { provide: 'DOMAIN', useValue: DOMAIN, multi: true },
      { provide: 'DOMAIN', useValue: 'asdasd' , multi: true},
      // { provide: KEY, useFactory: (user:UsersService)=>{
 
      // },deps:[UsersService]},
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
