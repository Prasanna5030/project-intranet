import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllForm16Component } from './all-form16.component';

describe('AllForm16Component', () => {
  let component: AllForm16Component;
  let fixture: ComponentFixture<AllForm16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllForm16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllForm16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
