import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component(
  {
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  }
)
export class SearchComponent implements OnInit {

  @Input('placeholder')
  public pls: string;

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter();


  @Input()
  public set search(value: string) {
    this.searchValue = value;
    this.searchChange.emit(value);
  };

  public searchValue: string;

  public constructor() {
    console.log(1,this.pls);
  }

  public ngOnInit(): void {
    console.log(2,this.pls);
  }

  public myInputEv(searchTerm: string): void {
    this.search = searchTerm;
  }

}
