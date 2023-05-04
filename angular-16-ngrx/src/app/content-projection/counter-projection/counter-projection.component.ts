import { AfterViewInit, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CounterButtonsProjectionComponent } from '../counter-buttons-projection/counter-buttons-projection.component';

@Component({
  selector: 'app-counter-projection',
  templateUrl: './counter-projection.component.html',
  styleUrls: ['./counter-projection.component.css']
})
export class CounterProjectionComponent implements AfterViewInit ,OnChanges{
  counterVal: number = 0;
  @ViewChild(CounterButtonsProjectionComponent) buttonsComponent!: CounterButtonsProjectionComponent;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }
  ngAfterViewInit(): void {
    console.log("called")
   // throw new Error('Method not implemented.');
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
