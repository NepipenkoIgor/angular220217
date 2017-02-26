import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../header/search/search.component';
@NgModule(
  {
    imports: [
      CommonModule
    ],
    exports: [HeaderComponent],
    declarations: [
      HeaderComponent,
      SearchComponent
    ]
  }
)
export class LibraryModule {
}
