import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPromotionComponent } from './offers-promotion.component';

describe('OffersPromotionComponent', () => {
  let component: OffersPromotionComponent;
  let fixture: ComponentFixture<OffersPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
