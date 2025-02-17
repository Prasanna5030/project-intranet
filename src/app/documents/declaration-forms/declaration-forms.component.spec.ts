import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationFormsComponent } from './declaration-forms.component';

describe('DeclarationFormsComponent', () => {
  let component: DeclarationFormsComponent;
  let fixture: ComponentFixture<DeclarationFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclarationFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
