import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExportAsModule } from 'ngx-export-as';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExportAsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
