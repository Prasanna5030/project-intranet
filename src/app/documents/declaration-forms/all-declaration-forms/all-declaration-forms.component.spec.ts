import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeclarationFormsComponent } from './all-declaration-forms.component';

describe('AllDeclarationFormsComponent', () => {
  let component: AllDeclarationFormsComponent;
  let fixture: ComponentFixture<AllDeclarationFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDeclarationFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDeclarationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
