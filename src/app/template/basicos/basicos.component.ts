import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm ?: NgForm;
  initialFormValue = {
    producto : '',
    precio : 0,
    existencia : 0
  }

  constructor() { }

  ngOnInit(): void {

  }

  isProductNameInvalid() : boolean | undefined{
    return this.myForm?.controls['producto']?.invalid && this.myForm?.controls['producto']?.touched;
  }

  isProductPriceInvalid() : boolean | undefined{
    return this.myForm?.controls['precio']?.invalid && this.myForm?.controls['precio']?.touched;
  }

  saveProduct(){
    this.myForm?.resetForm({
      'precio' : 0,
      'existencia' : 0
    });
  }
}
