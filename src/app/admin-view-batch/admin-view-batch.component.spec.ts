import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBatchComponent } from './admin-view-batch.component';

describe('AdminViewBatchComponent', () => {
  let component: AdminViewBatchComponent;
  let fixture: ComponentFixture<AdminViewBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
