import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputSeComponent } from './counter-input-se.component';

describe('CounterInputSeComponent', () => {
  let component: CounterInputSeComponent;
  let fixture: ComponentFixture<CounterInputSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterInputSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterInputSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
