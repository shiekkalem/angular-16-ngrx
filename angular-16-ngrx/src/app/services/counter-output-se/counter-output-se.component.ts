import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-counter-output-se',
  templateUrl: './counter-output-se.component.html',
  styleUrls: ['./counter-output-se.component.css']
})
export class CounterOutputSeComponent implements OnInit {
  counterVal: number = 0;
  constructor(private counterService: CounterServiceService) {

  }
  ngOnInit(): void {
    this.counterService._counterValSource.subscribe(
      (value) =>this.counterVal = value
      )
  }

}


