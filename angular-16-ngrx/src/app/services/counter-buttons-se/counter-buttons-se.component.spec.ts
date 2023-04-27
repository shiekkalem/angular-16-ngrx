import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonsSeComponent } from './counter-buttons-se.component';

describe('CounterButtonsSeComponent', () => {
  let component: CounterButtonsSeComponent;
  let fixture: ComponentFixture<CounterButtonsSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonsSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtonsSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
