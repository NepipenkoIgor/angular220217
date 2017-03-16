import {
  AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, ViewChild, ViewChildren, ViewEncapsulation,

} from '@angular/core';

import { UsersService } from './users.service';

import { HeaderComponent } from './header/header.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Native
  }
)
export class AppComponent implements AfterViewInit {

  public tab: string = 'profile';
  public searchTerm: string = '';

  public users$: Observable<User[]>;

  public constructor(
    private _userService: UsersService
  ) { }

  public ngOnInit(): void {
    this.users$ = this._userService.getUsers();

    setTimeout(() => {
      this.users$
        .switchMap((users: User[]) => Observable.from(users))
        .subscribe((user: User) => {
          console.log(user)
        });
    }, 5000);
  }

  public ngAfterViewInit(): void {
    // console.info(this.search);
    // console.info(this.header);
  }

}
