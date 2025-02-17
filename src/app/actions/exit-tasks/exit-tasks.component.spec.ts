import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitTasksComponent } from './exit-tasks.component';

describe('ExitTasksComponent', () => {
  let component: ExitTasksComponent;
  let fixture: ComponentFixture<ExitTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExitTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
