import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component(
  {
    selector: 'app-reactive',
    templateUrl: './reactive.component.html',
    styleUrls: ['./reactive.component.css']
  }
)
export class ReactiveComponent implements OnInit {

  public myForm: FormGroup;

  public constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.group(
      {
        name: ['', [Validators.minLength(7), Validators.required]],
        phone: ['', null, [this.phoneValidator]],
        password: this._fb.group(
          {
            npass: ['', [Validators.minLength(6), Validators.required]],
            rpass: ['', [Validators.minLength(6), Validators.required]],
          }
        )
      }
    );
  }

  public ngOnInit(): void {

    Observable.of(
      {
        name: 'Igor',
        phone: '0934232333',
        password: {
          npass: 'asdasda',
          rpass: 'asdada'
        }
      }
    )
      .delay(6000)
      .subscribe(
        (values: any) => {
          // this.myForm.setValue(values);
        }
      );

    this.myForm.controls['name'].valueChanges.subscribe(
      (value: string) => {
        console.log(`From component ${value}`);
      }
    );
  }

  public toServer(value: any): void {
    console.log(value)
    this.myForm.reset();
  }

  public  phoneValidator(field: FormControl): Observable<{ [key: string]: boolean }> {
    const valid: boolean = /^093\d{7}$/.test(field.value);
    return Observable.of(!valid ? { 'error_phone': true } : null)
      .delay(5000);
  };

}
