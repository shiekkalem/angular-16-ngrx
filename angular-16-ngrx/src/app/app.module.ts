import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOutputPcComponent } from './parent-child/counter-output-pc/counter-output-pc.component';
import { CounterButtonsPcComponent } from './parent-child/counter-buttons-pc/counter-buttons-pc.component';
import { CounterInputPcComponent } from './parent-child/counter-input-pc/counter-input-pc.component';
import { CounterComponentPcComponent } from './parent-child/counter-component-pc/counter-component-pc.component';
import { CounterSeComponent } from './services/counter-se/counter-se.component';
import { CounterButtonsSeComponent } from './services/counter-buttons-se/counter-buttons-se.component';
import { CounterOutputSeComponent } from './services/counter-output-se/counter-output-se.component';
import { CounterInputSeComponent } from './services/counter-input-se/counter-input-se.component';
import { CounterNgrxComponent } from './ngrx/counter-ngrx/counter-ngrx.component';
import { CounterInputNgrxComponent } from './ngrx/counter-input-ngrx/counter-input-ngrx.component';
import { CounterOutputNgrxComponent } from './ngrx/counter-output-ngrx/counter-output-ngrx.component';
import { CounterButtonsNgrxComponent } from './ngrx/counter-buttons-ngrx/counter-buttons-ngrx.component';
import { CounterButtonsProjectionComponent } from './content-projection/counter-buttons-projection/counter-buttons-projection.component';
import { CounterOutputProjectionComponent } from './content-projection/counter-output-projection/counter-output-projection.component';
import { CounterInputProjectionComponent } from './content-projection/counter-input-projection/counter-input-projection.component';
import { CounterProjectionComponent } from './content-projection/counter-projection/counter-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputPcComponent,
    CounterButtonsPcComponent,
    CounterInputPcComponent,
    CounterComponentPcComponent,
    CounterSeComponent,
    CounterButtonsSeComponent,
    CounterOutputSeComponent,
    CounterInputSeComponent,
    CounterNgrxComponent,
    CounterInputNgrxComponent,
    CounterOutputNgrxComponent,
    CounterButtonsNgrxComponent,
    CounterButtonsProjectionComponent,
    CounterOutputProjectionComponent,
    CounterInputProjectionComponent,
    CounterProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
