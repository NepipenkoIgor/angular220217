import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public id: number;

  public constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: { id: number }) => {
      this.id = params.id;
    })
  }

}
