import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons-projection',
  templateUrl: './counter-buttons-projection.component.html',
  styleUrls: ['./counter-buttons-projection.component.css']
})
export class CounterButtonsProjectionComponent {
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
