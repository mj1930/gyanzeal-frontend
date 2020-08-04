import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentManagementComponent } from './admin-student-management.component';

describe('AdminStudentManagementComponent', () => {
  let component: AdminStudentManagementComponent;
  let fixture: ComponentFixture<AdminStudentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
