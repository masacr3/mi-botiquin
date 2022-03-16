import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicacionModule } from './medicacion/medicacion.module';
import { HttpClientModule } from '@angular/common/http';
import { RemediosService } from './medicacion/services/remedios.service';
import { ProductosService } from './articulos/service/productos.service';
import { ArticulosModule } from './articulos/articulos.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicacionModule,
    ArticulosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RemediosService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
