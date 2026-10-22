import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coche-component',
  standalone: false,
  styleUrl: './padre-coche-component.css',
  templateUrl: './padre-coche-component.html',
})
export class PadreCocheComponent {
  public arrayCoches: Array<Coche>;
  
  constructor(){
    this.arrayCoches=[
      new Coche("Audi", "Modelo1", 10000, 200, 60),
      new Coche("Volkswagen", "Modelo1", 13000, 400, 30),
      new Coche("BMW", "Modelo1", 14000, 700, 40),
      new Coche("Mercedes", "Modelo1", 15000, 500, 20)
    ]
  }
}
