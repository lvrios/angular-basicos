import {Component} from '@angular/core'

@Component ({
  selector: 'app-contador',
  template: `
    <h1>{{ title}}</h1>
    <h2>Base <strong>{{base}}</strong></h2>

    <button (click)= "acumular(base);"> {{base}} </button>

    <span> {{ number }}</span>

    <button (click)= "acumular(-base);"> {{-base}} </button>
  `})


export class ContadorComponent{
    title = 'Contador App';
    number: number = 10;
    base:number = 5;

    acumular(valor:number){
      this.number += valor;
  }

}