import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { ComcicsSimpleComponent } from './components/comcics-simple-component/comcics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "listaproductos", component:ListaProductosComponent},
  {path: "padrecoche", component:PadreCocheComponent},
  {path: "padredeportes", component:PadreDeportesComponent},
  {path: "padrenumeros", component:PadreNumerosComponent},
  {path: "comicssimple", component: ComcicsSimpleComponent},
  {path: "comicsjson", component: ComicsJsonComponent},
  {path: "comicsexcel", component: ComicsExcelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
