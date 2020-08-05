import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCallbackRequestsComponent } from './admin-callback-requests.component';

describe('AdminCallbackRequestsComponent', () => {
  let component: AdminCallbackRequestsComponent;
  let fixture: ComponentFixture<AdminCallbackRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCallbackRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCallbackRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
