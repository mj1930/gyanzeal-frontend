import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuriculumManagementComponent } from './admin-curiculum-management.component';

describe('AdminCuriculumManagementComponent', () => {
  let component: AdminCuriculumManagementComponent;
  let fixture: ComponentFixture<AdminCuriculumManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCuriculumManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuriculumManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
