import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {

  public numero!: number;
  public numeros!: Array<number>
  public mensaje!: string;
  public total!: number;

  sumarNumeros(event: number): void{
    console.log("funciona");
    this.total +=event;
    this.mensaje = "El total es " + this.total;

  }

  constructor(){

    this.numeros=[]
    this.numero = Math.floor(Math.random() * 100) + 1;
    this.total = 0;
  }

  generarNumero(): void{
    this.numeros=[]
    for(let i=0; i<=5; i++){
      this.numero = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(this.numero);
    }
  }
  


}
