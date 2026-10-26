import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent {

  @Input() numero!: number;
  @Output() sumarNumeros: EventEmitter<any> = new EventEmitter();

  sumar(): void{
    this.sumarNumeros.emit(this.numero);
    

  }

}
