import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWalletComponent } from './student-wallet.component';

describe('StudentWalletComponent', () => {
  let component: StudentWalletComponent;
  let fixture: ComponentFixture<StudentWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
