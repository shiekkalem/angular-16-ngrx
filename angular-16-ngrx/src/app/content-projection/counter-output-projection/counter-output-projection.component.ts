import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output-projection',
  templateUrl: './counter-output-projection.component.html',
  styleUrls: ['./counter-output-projection.component.css']
})
export class CounterOutputProjectionComponent {
  @Input() counterVal:number=0;

}
