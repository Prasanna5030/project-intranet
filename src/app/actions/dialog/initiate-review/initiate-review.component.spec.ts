import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateReviewComponent } from './initiate-review.component';

describe('InitiateReviewComponent', () => {
  let component: InitiateReviewComponent;
  let fixture: ComponentFixture<InitiateReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiateReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
