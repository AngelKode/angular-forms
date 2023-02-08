import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  switchForm : FormGroup = this.formBuilder.group({
    gender        : ['M',Validators.required],
    notifications : [false,Validators.required],
    termsConditions : [false,Validators.requiredTrue]
  })

  persona : any = {
    gender : 'F',
    notifications : true
  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.switchForm.reset({
      ...this.persona,
      termsConditions:true
    })

    this.switchForm.valueChanges.subscribe(({gender,notifications}) => {
      //Asiganamos los valores al objeto
      this.persona = {gender,notifications};
    })
  }

  savePerson() : void{
    //Desestructuramos el objeto
    const {gender,notifications} = this.switchForm.value
    //Asiganamos los valores al objeto
    this.persona = {gender,notifications};
  }

}
