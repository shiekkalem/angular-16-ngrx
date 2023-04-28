import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonsNgrxComponent } from './counter-buttons-ngrx.component';

describe('CounterButtonsNgrxComponent', () => {
  let component: CounterButtonsNgrxComponent;
  let fixture: ComponentFixture<CounterButtonsNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonsNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtonsNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
