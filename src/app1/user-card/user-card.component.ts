import { Component, Input, OnInit } from '@angular/core';

@Component(
  {
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
  }
)
export class UserCardComponent {

  @Input()
  public user: User;


  public style: { [key: string]: string|number } = {
    width: '25px',
    float: 'left',
    border: '1px solid grey',
    'border-radius': '50%'
  };
}
