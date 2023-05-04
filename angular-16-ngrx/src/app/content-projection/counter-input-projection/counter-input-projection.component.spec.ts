import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputProjectionComponent } from './counter-input-projection.component';

describe('CounterInputProjectionComponent', () => {
  let component: CounterInputProjectionComponent;
  let fixture: ComponentFixture<CounterInputProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterInputProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterInputProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
