import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';

import { NasaService } from './nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
