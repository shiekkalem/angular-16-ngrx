import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOutputPcComponent } from './counter-output-pc/counter-output-pc.component';
import { CounterButtonsPcComponent } from './counter-buttons-pc/counter-buttons-pc.component';
import { CounterInputPcComponent } from './counter-input-pc/counter-input-pc.component';
import { CounterComponentPcComponent } from './counter-component-pc/counter-component-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputPcComponent,
    CounterButtonsPcComponent,
    CounterInputPcComponent,
    CounterComponentPcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
