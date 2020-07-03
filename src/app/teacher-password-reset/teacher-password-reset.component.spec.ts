import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPasswordResetComponent } from './teacher-password-reset.component';

describe('TeacherPasswordResetComponent', () => {
  let component: TeacherPasswordResetComponent;
  let fixture: ComponentFixture<TeacherPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
