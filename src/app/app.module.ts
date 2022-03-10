import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicacionModule } from './medicacion/medicacion.module';
import { HttpClientModule } from '@angular/common/http';
import { RemediosService } from './medicacion/services/remedios.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicacionModule,
    HttpClientModule

  ],
  providers: [RemediosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
