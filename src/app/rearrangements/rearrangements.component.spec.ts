import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RearrangementsComponent } from './rearrangements.component';

describe('RearrangementsComponent', () => {
  let component: RearrangementsComponent;
  let fixture: ComponentFixture<RearrangementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RearrangementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RearrangementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
