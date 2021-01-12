import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaleAngularComponent } from './dale-angular.component';

describe('DaleAngularComponent', () => {
  let component: DaleAngularComponent;
  let fixture: ComponentFixture<DaleAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaleAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaleAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
