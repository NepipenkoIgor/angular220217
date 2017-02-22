import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  public title: string = 'app works!';
  public isLoad: boolean = true;

  public constructor() {
  }

  public getValue(): void {

  }
}
