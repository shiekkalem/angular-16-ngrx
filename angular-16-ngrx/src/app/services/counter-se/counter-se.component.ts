import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-se',
  templateUrl: './counter-se.component.html',
  styleUrls: ['./counter-se.component.css']
})
export class CounterSeComponent {
  counterVal: number = 0;
  constructor() {

  }
  onIncrement() {
    this.counterVal++
  }
  onDecrement() {
    this.counterVal--
  }
  onReset() {
    this.counterVal = 0
  }
  ngOnInit(): void {
  }
}
