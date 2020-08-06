import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateBatchComponent } from './admin-create-batch.component';

describe('AdminCreateBatchComponent', () => {
  let component: AdminCreateBatchComponent;
  let fixture: ComponentFixture<AdminCreateBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
