import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  reactiveForm : FormGroup = this.formBuilder.group({
    nombre : [null, [
      Validators.required,
      Validators.minLength(3)
    ]],
    precio : [null, [
      Validators.required,
      Validators.min(0)
    ]],
    existencias : [null, [
      Validators.required,
      Validators.min(0)
    ]]
  })

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.reactiveForm.reset({
      nombre : 'Amd A10',
      precio : 1200,
      existencias : 1
    })
  }

  saveData() : void{
    //Validamos si el formulario tiene los datos correctos
    if(this.reactiveForm.invalid){
      //Marcamos todos los campos como tocados para habilitar mensajes de error
      this.reactiveForm.markAllAsTouched();
      return;
    }

    //Reseteamos los valores
    this.reactiveForm.reset()

  }
  isInputInvalid(controlName : string) : boolean | null{
    return this.reactiveForm.controls[controlName]?.errors && this.reactiveForm.controls[controlName]?.touched
  }

}
