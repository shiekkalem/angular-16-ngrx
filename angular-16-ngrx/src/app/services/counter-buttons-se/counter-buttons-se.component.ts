import { Component } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-counter-buttons-se',
  templateUrl: './counter-buttons-se.component.html',
  styleUrls: ['./counter-buttons-se.component.css']
})
export class CounterButtonsSeComponent {
  counterVal:number=0
  constructor(private counterService: CounterServiceService) {

  }
  onIncrement() {
    this.counterService.onIncrement();
  }
  onDecrement() {
    this.counterService.onDecrement();
  }
  onReset() {
    this.counterService.onReset();
  }
  ngOnInit(): void {
  }

}
