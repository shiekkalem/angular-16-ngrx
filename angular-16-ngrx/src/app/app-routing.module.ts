import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterProjectionComponent } from './content-projection/counter-projection/counter-projection.component';
import { CounterNgrxComponent } from './ngrx/counter-ngrx/counter-ngrx.component';
import { CounterComponentPcComponent } from './parent-child/counter-component-pc/counter-component-pc.component';
import { CounterSeComponent } from './services/counter-se/counter-se.component';

const routes: Routes = [
  {
    path:"parent-child",component:CounterComponentPcComponent
  },
  {
    path:"services-communication",component:CounterSeComponent
  },
  {
    path:"ngrx-communication",component:CounterNgrxComponent
  },
  {
    path:"content-projection",component:CounterProjectionComponent
  },

  {
    path:"",
    redirectTo: '/parent-child',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/parent-child',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
