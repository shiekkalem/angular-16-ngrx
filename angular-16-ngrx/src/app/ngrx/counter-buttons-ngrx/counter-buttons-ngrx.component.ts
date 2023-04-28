import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons-ngrx',
  templateUrl: './counter-buttons-ngrx.component.html',
  styleUrls: ['./counter-buttons-ngrx.component.css']
})
export class CounterButtonsNgrxComponent {
  @Output() incrementEvent= new EventEmitter<void>();
  @Output() decrementEvent= new EventEmitter<void>()
  @Output() resetEvent= new EventEmitter<void>()
  
  onIncrement(){
    this.incrementEvent.emit()
  }
  onDecrement(){
    this.decrementEvent.emit()
  
  }
  onReset(){
    this.resetEvent.emit()
  }
}
