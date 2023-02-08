import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  dinamicForm : FormGroup = this.formBuilder.group({
    nombre : [null, [
      Validators.required,
      Validators.minLength(3)
    ]],
    gamesData : this.formBuilder.array([
     ['LoL',Validators.required],
     ['Valorant',Validators.required]
    ],Validators.required)
  });

  newGameData : FormControl = this.formBuilder.control('',Validators.required);

  get getGamesData(){
    return this.dinamicForm.get('gamesData') as FormArray;
  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  saveData() : void{
    //Verificamos si el formulario es valido
    if(this.dinamicForm.invalid){
      this.dinamicForm.markAllAsTouched();
      return;
    }

    //Reseteamos los valores si los datos son correctos
    this.dinamicForm.reset()
  }

  isInputValid(controlName : string) : boolean | null{
    return this.dinamicForm.controls[controlName]?.invalid &&
           this.dinamicForm.controls[controlName]?.touched;
  }

  addGame():void{

    if(this.newGameData.invalid){
      return;
    }

    this.getGamesData.push(this.formBuilder.control(this.newGameData.value,Validators.required));
    this.newGameData.reset();
  }

  deleteGame(index : number){
    if(this.getGamesData.controls[index].invalid){
      return;
    }

    this.getGamesData.removeAt(index);
  }

}
