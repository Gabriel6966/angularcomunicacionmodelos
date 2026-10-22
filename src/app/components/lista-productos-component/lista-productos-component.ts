import { Component } from '@angular/core';
import { Productos } from '../../models/productos';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto: Productos;
  public listaproductos: Array<Productos>;



  constructor() {
    this.producto = new Productos("Camiseta", "https://example.com/camiseta.jpg", 19.99);
    this.listaproductos = new Array<Productos>();

    this.listaproductos = [
      new Productos(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Productos(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),
      new Productos(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Productos(
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        "J-Hayber Olimpo",
        60
      ),
      new Productos(
        "Cangrejeras",
        "https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp",
        10
      )
    ]
  }


}
