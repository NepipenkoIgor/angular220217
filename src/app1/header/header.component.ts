import {
  AfterContentInit, Component, Output,OnInit, ContentChildren, EventEmitter,
  QueryList, ViewEncapsulation, TemplateRef, ViewChild, ContentChild
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

  @Output()
  public searchText: EventEmitter<string> = new EventEmitter();

  /* tslint:disable */
  @ContentChild(TemplateRef)
  public template: TemplateRef<any>;
  /* tslint:enable */

  public context: { mytitle: string, $implicit: string } = {
    mytitle: 'Our company',
    $implicit: 'my desc'
  };

  public title: string = 'Our company';
  public isLogo: boolean = true;
  public width: number = 25;
  public placeholder: string = 'myplaceholder';

  public searchTerm: string = 'Igor';

  public constructor() {
  }

  public ngOnInit(): void {
    setTimeout(
      () => {
        console.log(this.searchTerm)
      }, 10000
    )
  }

  public ngAfterContentInit(): void {
  }

}
