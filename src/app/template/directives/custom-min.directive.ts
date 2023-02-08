import {Directive, Input} from "@angular/core";
import {FormControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector : '[customMinValue][ngModel]',
  providers : [{
    provide : NG_VALIDATORS,
    useExisting : CustomMinDirective,
    multi : true
  }]
})
export class CustomMinDirective implements Validator{

  @Input() minValue !: number;

  constructor() {

  }

  validate(control : FormControl){
    const inputValue = control.value;
    return (inputValue < this.minValue) ? {'customMin' : true} : null;
  }

}
