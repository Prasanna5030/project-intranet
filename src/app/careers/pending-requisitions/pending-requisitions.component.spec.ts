import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRequisitionsComponent } from './pending-requisitions.component';

describe('PendingRequisitionsComponent', () => {
  let component: PendingRequisitionsComponent;
  let fixture: ComponentFixture<PendingRequisitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingRequisitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
