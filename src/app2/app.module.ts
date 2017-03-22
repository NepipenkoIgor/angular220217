import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';


@NgModule(
  {
    declarations: [
      AppComponent,
      ReactiveComponent,
      TemplateComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
