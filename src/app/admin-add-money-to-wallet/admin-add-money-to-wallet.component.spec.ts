import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMoneyToWalletComponent } from './admin-add-money-to-wallet.component';

describe('AdminAddMoneyToWalletComponent', () => {
  let component: AdminAddMoneyToWalletComponent;
  let fixture: ComponentFixture<AdminAddMoneyToWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddMoneyToWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddMoneyToWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
