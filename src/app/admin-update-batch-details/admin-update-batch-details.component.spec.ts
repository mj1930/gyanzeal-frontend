import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateBatchDetailsComponent } from './admin-update-batch-details.component';

describe('AdminUpdateBatchDetailsComponent', () => {
  let component: AdminUpdateBatchDetailsComponent;
  let fixture: ComponentFixture<AdminUpdateBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
