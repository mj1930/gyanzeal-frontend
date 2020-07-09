import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPurchaseHistoryComponent } from './student-purchase-history.component';

describe('StudentPurchaseHistoryComponent', () => {
  let component: StudentPurchaseHistoryComponent;
  let fixture: ComponentFixture<StudentPurchaseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPurchaseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
