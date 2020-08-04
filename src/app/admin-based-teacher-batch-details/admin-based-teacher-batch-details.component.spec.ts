import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBasedTeacherBatchDetailsComponent } from './admin-based-teacher-batch-details.component';

describe('AdminBasedTeacherBatchDetailsComponent', () => {
  let component: AdminBasedTeacherBatchDetailsComponent;
  let fixture: ComponentFixture<AdminBasedTeacherBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBasedTeacherBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBasedTeacherBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
