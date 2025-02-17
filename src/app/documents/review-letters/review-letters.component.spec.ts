import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLettersComponent } from './review-letters.component';

describe('ReviewLettersComponent', () => {
  let component: ReviewLettersComponent;
  let fixture: ComponentFixture<ReviewLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
