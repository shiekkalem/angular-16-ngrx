import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonsPcComponent } from './counter-buttons-pc.component';

describe('CounterButtonsPcComponent', () => {
  let component: CounterButtonsPcComponent;
  let fixture: ComponentFixture<CounterButtonsPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonsPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtonsPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
