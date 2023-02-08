import {Component, OnInit, ViewChild} from '@angular/core';

interface Persona{
  nombre : string;
  favoritos : Favorito[];
}

interface Favorito{
  id : number;
  nombre : string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  newFavorite : string = "";
  persona : Persona = {
    nombre : 'Pedro',
    favoritos : [
      {id : 1, nombre : 'Dota 2'},
      {id : 2, nombre : 'Valorant'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() : void{
    const newItemFavorite : Favorito = {
      id : this.persona.favoritos.length + 1,
      nombre : this.newFavorite
    }

    this.persona.favoritos.push({...newItemFavorite});
    this.newFavorite = "";
  }

  delete(index : number) : void{
    this.persona.favoritos.splice(index,1)
  }


}
