import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputNgrxComponent } from './counter-input-ngrx.component';

describe('CounterInputNgrxComponent', () => {
  let component: CounterInputNgrxComponent;
  let fixture: ComponentFixture<CounterInputNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterInputNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterInputNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
