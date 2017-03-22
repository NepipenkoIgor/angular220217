import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  public users: User[];
  public title: string;

  public constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { users: User[], title: string }) => {
      this.users = data.users;
      this.title = data.title;
    });
  }

}
