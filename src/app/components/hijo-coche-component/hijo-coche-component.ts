import { Component } from '@angular/core';
import {Coche} from '../../models/coche';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hijo-coche-component',
  standalone: false,
  styleUrl: './hijo-coche-component.css',
  templateUrl: './hijo-coche-component.html',
})
export class HijoCocheComponent {
  @Input() public coche!: Coche;


  constructor(){
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
