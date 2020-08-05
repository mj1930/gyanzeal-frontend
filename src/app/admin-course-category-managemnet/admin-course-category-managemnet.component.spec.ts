import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseCategoryManagemnetComponent } from './admin-course-category-managemnet.component';

describe('AdminCourseCategoryManagemnetComponent', () => {
  let component: AdminCourseCategoryManagemnetComponent;
  let fixture: ComponentFixture<AdminCourseCategoryManagemnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseCategoryManagemnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseCategoryManagemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
