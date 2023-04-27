import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSeComponent } from './counter-se.component';

describe('CounterSeComponent', () => {
  let component: CounterSeComponent;
  let fixture: ComponentFixture<CounterSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
