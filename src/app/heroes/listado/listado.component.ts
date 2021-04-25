import { Component, OnInit } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

//creacion auto de componentes
export class ListadoComponent {
// inicializar
  heroes: string[] = ["Spìderman","Superman","Batman","Thor"]
  heroeBorrado: string = '';

  //usar this.x inicializado
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
  

}

