import { Component } from '@angular/core';
import {Coche} from '../../models/coche';

@Component({
  selector: 'app-hijo-coche-component',
  standalone: false,
  styleUrl: './hijo-coche-component.css',
  templateUrl: './hijo-coche-component.html',
})
export class HijoCocheComponent {
  public coche: Coche;


  constructor(){
    this.coche = new Coche("Coche1", "Modelo1", 10000, 200, 60);
    this.coche = new Coche("Coche2", "Modelo1", 13000, 400, 30);
    this.coche = new Coche("Coche3", "Modelo1", 14000, 700, 40);
    this.coche = new Coche("Coche4", "Modelo1", 15000, 500, 20);
  }

  acelerarCoche(): void{
    this.coche.velocidad+=this.coche.aceleracion;
  }

  frenarCoche():void{
    this.coche.velocidad-=this.coche.aceleracion;
    if(this.coche.velocidad<=0){
      this.coche.velocidad=0;
    }
  }

}
