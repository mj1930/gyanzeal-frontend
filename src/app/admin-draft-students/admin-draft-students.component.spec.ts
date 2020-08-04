import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDraftStudentsComponent } from './admin-draft-students.component';

describe('AdminDraftStudentsComponent', () => {
  let component: AdminDraftStudentsComponent;
  let fixture: ComponentFixture<AdminDraftStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDraftStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDraftStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
