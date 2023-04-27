import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentPcComponent } from './counter-component-pc.component';

describe('CounterComponentPcComponent', () => {
  let component: CounterComponentPcComponent;
  let fixture: ComponentFixture<CounterComponentPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponentPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponentPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
