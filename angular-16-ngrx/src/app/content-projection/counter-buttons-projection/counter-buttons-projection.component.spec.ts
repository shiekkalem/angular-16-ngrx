import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonsProjectionComponent } from './counter-buttons-projection.component';

describe('CounterButtonsProjectionComponent', () => {
  let component: CounterButtonsProjectionComponent;
  let fixture: ComponentFixture<CounterButtonsProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonsProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtonsProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
