import { Component } from '@angular/core';

interface MenuItem {
  text : string;
  route : string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }

    li:hover {
      background-color: #4b87d3;
      color:white;
    }
  `
  ]
})
export class SideMenuComponent{

  templateMenuItems : MenuItem[] = [
    {
      text : 'Básicos',
      route : './template/basicos'
    },
    {
      text : 'Dinámicos',
      route : './template/dinamicos'
    },
    {
      text : 'Switches',
      route : './template/switches'
    }
  ]

  reactiveMenuItems : MenuItem[] = [
    {
      text : 'Básicos',
      route : './reactive/basicos'
    },
    {
      text : 'Dinámicos',
      route : './reactive/dinamicos'
    },
    {
      text : 'Switches',
      route : './reactive/switches'
    }
  ]

  authMenu : MenuItem[] = [
    {
      text : 'registro',
      route : './validations/register'
    },
    {
      text : 'login',
      route : './validations/login'
    }
  ]

}
