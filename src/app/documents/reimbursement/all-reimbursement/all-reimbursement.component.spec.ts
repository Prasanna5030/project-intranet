import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReimbursementComponent } from './all-reimbursement.component';

describe('AllReimbursementComponent', () => {
  let component: AllReimbursementComponent;
  let fixture: ComponentFixture<AllReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllReimbursementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
