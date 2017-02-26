import {
  AfterContentInit, Component, ContentChild, OnInit, ContentChildren,
  QueryList, ViewEncapsulation
} from '@angular/core';
import { SearchComponent } from './search/search.component';
@Component(
  {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.Native
  }
)
export class HeaderComponent implements OnInit, AfterContentInit {


  public title: string = 'Our company';
  public isLogo: boolean = true;
  public width: number = 25;
  public placeholder: string = 'myplaceholder';

  public searchTerm: string = 'Igor';

  public constructor() {
  }

  public ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.searchTerm)
    },10000)
  }

  public ngAfterContentInit(): void {
  }

}
