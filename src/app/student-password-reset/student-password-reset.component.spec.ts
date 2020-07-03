import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasswordResetComponent } from './student-password-reset.component';

describe('StudentPasswordResetComponent', () => {
  let component: StudentPasswordResetComponent;
  let fixture: ComponentFixture<StudentPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
