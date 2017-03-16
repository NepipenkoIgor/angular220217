import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../header/search/search.component';
import { LogDirective } from '../log.directive';
@NgModule(
  {
    imports: [
      CommonModule
    ],
    exports: [HeaderComponent],
    declarations: [
      HeaderComponent,
      SearchComponent,
      LogDirective
    ]
  }
)
export class LibraryModule {
}
