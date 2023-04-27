import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons-pc',
  templateUrl: './counter-buttons-pc.component.html',
  styleUrls: ['./counter-buttons-pc.component.css']
})
export class CounterButtonsPcComponent {
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
