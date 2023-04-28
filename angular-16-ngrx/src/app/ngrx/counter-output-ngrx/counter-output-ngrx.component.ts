import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output-ngrx',
  templateUrl: './counter-output-ngrx.component.html',
  styleUrls: ['./counter-output-ngrx.component.css']
})
export class CounterOutputNgrxComponent {
  @Input() counterVal:number=0;

}
