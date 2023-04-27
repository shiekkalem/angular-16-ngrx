import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  _counterValSource = new BehaviorSubject<number>(0)
  counterVal:number=0

  constructor() {
    this._counterValSource.subscribe(
      (value) =>this.counterVal = value
      )
  }
  onIncrement() {
    this.counterVal++
    this._counterValSource.next(this.counterVal)
  }
  onDecrement() {
    this.counterVal--
    this._counterValSource.next(this.counterVal)
  }
  onReset() {
    this._counterValSource.next(0)
  }
}
