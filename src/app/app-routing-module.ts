import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "listaproductos", component:ListaProductosComponent},
  {path: "padrecoche", component:PadreCocheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
