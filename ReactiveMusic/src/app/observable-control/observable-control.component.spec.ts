import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableControlComponent } from './observable-control.component';

describe('ObservableControlComponent', () => {
  let component: ObservableControlComponent;
  let fixture: ComponentFixture<ObservableControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
