import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHrPoliciesComponent } from './all-hr-policies.component';

describe('AllHrPoliciesComponent', () => {
  let component: AllHrPoliciesComponent;
  let fixture: ComponentFixture<AllHrPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllHrPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHrPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
