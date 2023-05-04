import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterProjectionComponent } from './counter-projection.component';

describe('CounterProjectionComponent', () => {
  let component: CounterProjectionComponent;
  let fixture: ComponentFixture<CounterProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
