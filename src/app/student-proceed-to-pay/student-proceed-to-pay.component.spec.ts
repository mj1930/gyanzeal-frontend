import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProceedToPayComponent } from './student-proceed-to-pay.component';

describe('StudentProceedToPayComponent', () => {
  let component: StudentProceedToPayComponent;
  let fixture: ComponentFixture<StudentProceedToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProceedToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProceedToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
