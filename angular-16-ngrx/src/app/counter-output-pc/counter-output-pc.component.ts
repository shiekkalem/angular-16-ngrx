import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output-pc',
  templateUrl: './counter-output-pc.component.html',
  styleUrls: ['./counter-output-pc.component.css']
})
export class CounterOutputPcComponent {
  @Input() counterVal:number=0;
}
