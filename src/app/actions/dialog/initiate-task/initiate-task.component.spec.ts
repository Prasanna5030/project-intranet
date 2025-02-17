import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateTaskComponent } from './initiate-task.component';

describe('InitiateTaskComponent', () => {
  let component: InitiateTaskComponent;
  let fixture: ComponentFixture<InitiateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitiateTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
