import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component-pc',
  templateUrl: './counter-component-pc.component.html',
  styleUrls: ['./counter-component-pc.component.css']
})
export class CounterComponentPcComponent implements OnInit {
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
