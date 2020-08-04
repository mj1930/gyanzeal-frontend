import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseDefaultFeeManagementComponent } from './admin-course-default-fee-management.component';

describe('AdminCourseDefaultFeeManagementComponent', () => {
  let component: AdminCourseDefaultFeeManagementComponent;
  let fixture: ComponentFixture<AdminCourseDefaultFeeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseDefaultFeeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseDefaultFeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
