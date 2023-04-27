import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputSeComponent } from './counter-output-se.component';

describe('CounterOutputSeComponent', () => {
  let component: CounterOutputSeComponent;
  let fixture: ComponentFixture<CounterOutputSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
