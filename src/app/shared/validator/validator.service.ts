import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern : string = '([a-zA-ZéíÉÍñ]){3,20} ([a-zA-Z]){3,20}';
  public emailPattern : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  checkUsername(control : FormControl) : ValidationErrors | null{
    const usernameValue : string = control?.value.trim().toLowerCase() as string;

    if(usernameValue === 'xd'){
      return {
        badUsername : true
      }
    }
    return null;
  }

  checkEqualInputPasswords(password :string, confirmPassword : string){
    return (control : FormGroup) : ValidationErrors | null => {
      const password_ = control.get(password)?.value;
      const confirmPassword_ = control.get(confirmPassword)?.value;

      if(password_ !== confirmPassword_){
        control.get(confirmPassword)?.setErrors({
          notSame : true
        })
        return {
          notSame : true
        }
      }

      control.get(confirmPassword)?.setErrors(null);
      return null
    }
  }

}
