import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validator/validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerValidationForm : FormGroup = this.formBuilder.group({
    name : ['', [
      Validators.required,
      Validators.pattern(this.validator.namePattern)
    ]],
    email : ['',[
      Validators.required,
      Validators.pattern(this.validator.emailPattern)
    ],],
    username : ['',[
      Validators.required,
      this.validator.checkUsername
    ]],
    password : [''],
    confirmPassword : ['']
  })

  constructor(private formBuilder : FormBuilder,
              private validator : ValidatorService) { }

  ngOnInit(): void {
    this.registerValidationForm.reset({
      name            : 'Pedro Perez',
      email           : 'lopes@hotmail.com',
      username        : 'lopes',
      password        : '',
      confirmPassword : ''
    })
  }

  notValidInput(name : string){
    return this.registerValidationForm.get(name)?.invalid &&
           this.registerValidationForm.get(name)?.touched;
  }

  saveData() : void{
    if(this.registerValidationForm.invalid){
      this.registerValidationForm.markAllAsTouched();
      return;
    }
    this.registerValidationForm.reset();
  }

}
