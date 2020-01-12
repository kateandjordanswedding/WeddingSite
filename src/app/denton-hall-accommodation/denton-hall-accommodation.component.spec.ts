import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentonHallAccommodationComponent } from './denton-hall-accommodation.component';

describe('DentonHallAccommodationComponent', () => {
  let component: DentonHallAccommodationComponent;
  let fixture: ComponentFixture<DentonHallAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentonHallAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentonHallAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
