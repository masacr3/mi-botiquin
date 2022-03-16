import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticulosComponent } from './componentes/card-articulos/card-articulos.component';
import { GridCardArticulosComponent } from './componentes/grid-card-articulos/grid-card-articulos.component';
import { FiltrarProductosPipe } from './pipes/filtrar-productos.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardArticulosComponent,
    GridCardArticulosComponent,
    FiltrarProductosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GridCardArticulosComponent
  ]
})
export class ArticulosModule { }
