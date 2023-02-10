import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {delay, map, Observable} from "rxjs";

interface Users{
  id : number;
  email : string;
  username : string;
}
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor(private httpClient : HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const emailToValidate = control?.value;
    return this.httpClient.get<Users[]>(`http://localhost:3000/usuarios?email=${emailToValidate}`)
      .pipe(
        delay(500),
        map((response : Users[]) => {
          return (response.length === 0) ? null : {emailTaken : true}
        })
      )
  }
}
