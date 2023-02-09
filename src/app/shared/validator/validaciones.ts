import {FormControl} from "@angular/forms";
//Validaciones sencillas
export const namePattern : string = '([a-zA-ZéíÉÍñ]){3,20} ([a-zA-Z]){3,20}';
export const emailPattern : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const checkUsername = (control : FormControl) => {
  const usernameValue : string = control?.value.trim().toLowerCase() as string;

  if(usernameValue === 'xd'){
    return {
      badUsername : true
    }
  }
  return null;
}
