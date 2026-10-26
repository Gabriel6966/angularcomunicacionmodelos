import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "listaproductos", component:ListaProductosComponent},
  {path: "padrecoche", component:PadreCocheComponent},
  {path: "padredeportes", component:PadreDeportesComponent},
  {path: "padrenumeros", component:PadreNumerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
