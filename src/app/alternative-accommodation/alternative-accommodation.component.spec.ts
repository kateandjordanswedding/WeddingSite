import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeAccommodationComponent } from './alternative-accommodation.component';

describe('AlternativeAccommodationComponent', () => {
  let component: AlternativeAccommodationComponent;
  let fixture: ComponentFixture<AlternativeAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
