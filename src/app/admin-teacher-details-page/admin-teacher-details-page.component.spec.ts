import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherDetailsPageComponent } from './admin-teacher-details-page.component';

describe('AdminTeacherDetailsPageComponent', () => {
  let component: AdminTeacherDetailsPageComponent;
  let fixture: ComponentFixture<AdminTeacherDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
