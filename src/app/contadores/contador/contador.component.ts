//importacion
import { Component } from '@angular/core';

//Decorador
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <!--<button (click)="sumar()">+1</button>-->
    <button (click)="acumular(base)">+{{base}}</button>
    {{ numero * 1 }}
    <button (click)="acumular(-base)">-{{base}}</button>
    <!--<button (click)="numero = numero -1">-1</button>-->
    `
})

//clase exportada
export class ContadorComponent {
  title:string = 'Contador APP';
  numero:number = 10;

  base:number = 5;

  sumar(){
    this.numero +=1;
  }

  acumular(valor:number){
    this.numero += valor;
  }
}