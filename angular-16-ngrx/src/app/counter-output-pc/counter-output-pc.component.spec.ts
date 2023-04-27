import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputPcComponent } from './counter-output-pc.component';

describe('CounterOutputPcComponent', () => {
  let component: CounterOutputPcComponent;
  let fixture: ComponentFixture<CounterOutputPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
