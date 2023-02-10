import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validator/validator.service";
import {EmailValidatorService} from "../../../shared/validator/email-validator.service";

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
    email : ['',
      [
        Validators.required,
        Validators.pattern(this.validator.emailPattern)
      ],
      [this.emailValidator]
    ],
    username : ['',[
      Validators.required,
      this.validator.checkUsername
    ]],
    password : ['',[
      Validators.required,
      Validators.minLength(6)
    ]],
    confirmPassword : ['',[
      Validators.required,
      Validators.minLength(6)
    ]]
  },{
    validators : [this.validator.checkEqualInputPasswords('password','confirmPassword')]
  })

  constructor(private formBuilder : FormBuilder,
              private validator : ValidatorService,
              private emailValidator : EmailValidatorService) { }

  ngOnInit(): void {}

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

  emailRequired(){
    return this.registerValidationForm.get('email')?.errors?.['required']
           && this.registerValidationForm.get('email')?.touched;
  }

  emailFormat(){
    return this.registerValidationForm.get('email')?.errors?.['pattern']
      && this.registerValidationForm.get('email')?.touched;
  }

  emailTaken(){
    return this.registerValidationForm.get('email')?.errors?.['emailTaken']
      && this.registerValidationForm.get('email')?.touched;
  }

}
