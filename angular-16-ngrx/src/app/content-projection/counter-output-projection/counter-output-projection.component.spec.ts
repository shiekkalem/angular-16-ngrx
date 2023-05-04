import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputProjectionComponent } from './counter-output-projection.component';

describe('CounterOutputProjectionComponent', () => {
  let component: CounterOutputProjectionComponent;
  let fixture: ComponentFixture<CounterOutputProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
