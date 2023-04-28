import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.css']
})
export class CounterNgrxComponent {
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
