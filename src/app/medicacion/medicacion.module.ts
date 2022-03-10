import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './componentes/card/card.component';
import { GridCardComponent } from './componentes/grid-card/grid-card.component';



@NgModule({
  declarations: [
    CardComponent,
    GridCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicacionModule { }
