import { Component, OnInit } from '@angular/core';

@Component(
  {
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
  }
)
export class TemplateComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public toServer(value: any): void {
    console.log(value)

  }

}
