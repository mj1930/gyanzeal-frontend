import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBatchDetailsComponent } from './teacher-batch-details.component';

describe('TeacherBatchDetailsComponent', () => {
  let component: TeacherBatchDetailsComponent;
  let fixture: ComponentFixture<TeacherBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
