import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherManagementComponent } from './admin-teacher-management.component';

describe('AdminTeacherManagementComponent', () => {
  let component: AdminTeacherManagementComponent;
  let fixture: ComponentFixture<AdminTeacherManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
