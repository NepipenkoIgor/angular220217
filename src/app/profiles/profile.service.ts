import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfileService implements Resolve<User[]> {

  public constructor(private _http: Http) { }

  public  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._http.get('http://learn.javascript.ru/courses/groups/api/participants?key=uy5nm6')
      .map((res: Response) => res.json()
        .map((user: User, i: number) => {
          user.id = i;
          return user;
        }));
  }
}
