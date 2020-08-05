import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemoClassesManagementComponent } from './admin-demo-classes-management.component';

describe('AdminDemoClassesManagementComponent', () => {
  let component: AdminDemoClassesManagementComponent;
  let fixture: ComponentFixture<AdminDemoClassesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDemoClassesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDemoClassesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
