import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputPcComponent } from './counter-input-pc.component';

describe('CounterInputPcComponent', () => {
  let component: CounterInputPcComponent;
  let fixture: ComponentFixture<CounterInputPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterInputPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterInputPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
