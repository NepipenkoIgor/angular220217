import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { DOMAIN_TOKEN } from './config'

@Injectable()
export class UsersService {

  public constructor(
    private _http: Http,
    @Inject('DOMAIN') private _DOMAIN: string
  ) {
    console.log(this._DOMAIN)
   }


  public getUsers(): Observable<User[]> {
    return this._http.get(`${this._DOMAIN[0]}/courses/groups/api/participants?key=mk2na8`)
      .map((res: Response) => res.json());

  }

}
