import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherPasswordResetComponent } from './teacher-password-reset/teacher-password-reset.component';
import { StudentPasswordResetComponent } from './student-password-reset/student-password-reset.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';
import { RegistrationService } from './services/registration.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentEnrolledCoursesComponent } from './student-enrolled-courses/student-enrolled-courses.component';
import { StudentPurchaseHistoryComponent } from './student-purchase-history/student-purchase-history.component';
import { StudentProfileSettingComponent } from './student-profile-setting/student-profile-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentCartComponent } from './student-cart/student-cart.component';
import { StudentProceedToPayComponent } from './student-proceed-to-pay/student-proceed-to-pay.component';
import { StudentWalletComponent } from './student-wallet/student-wallet.component';
import { TeacherBatchDetailsComponent } from './teacher-batch-details/teacher-batch-details.component';
import { TeacherProfileSettingComponent } from './teacher-profile-setting/teacher-profile-setting.component';
import { TokenService } from './services/token.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCuriculumManagementComponent } from './admin-curiculum-management/admin-curiculum-management.component';
import { AdminDemoClassesManagementComponent } from './admin-demo-classes-management/admin-demo-classes-management.component';
import { AdminCourseDefaultFeeManagementComponent } from './admin-course-default-fee-management/admin-course-default-fee-management.component';
import { AdminCourseCategoryManagemnetComponent } from './admin-course-category-managemnet/admin-course-category-managemnet.component';
import { AdminTeacherManagementComponent } from './admin-teacher-management/admin-teacher-management.component';
import { AdminTeacherDetailsPageComponent } from './admin-teacher-details-page/admin-teacher-details-page.component';
import { AdminBasedTeacherBatchDetailsComponent } from './admin-based-teacher-batch-details/admin-based-teacher-batch-details.component';
import { AdminDraftStudentsComponent } from './admin-draft-students/admin-draft-students.component';
import { AdminCallbackRequestsComponent } from './admin-callback-requests/admin-callback-requests.component';
import { AdminAddMoneyToWalletComponent } from './admin-add-money-to-wallet/admin-add-money-to-wallet.component';
import { AdminStudentManagementComponent } from './admin-student-management/admin-student-management.component';
import { AdminStudentDetailComponent } from './admin-student-detail/admin-student-detail.component';
import { AdminCreateBatchComponent } from './admin-create-batch/admin-create-batch.component';
import { AdminViewBatchComponent } from './admin-view-batch/admin-view-batch.component';
import { AdminUpdateBatchDetailsComponent } from './admin-update-batch-details/admin-update-batch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    TeacherSignupComponent,
    StudentSignupComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    TeacherPasswordResetComponent,
    StudentPasswordResetComponent,
    ErrorPageNotFoundComponent,
    StudentDashboardComponent,
    StudentEnrolledCoursesComponent,
    StudentPurchaseHistoryComponent,
    StudentProfileSettingComponent,
    ChangePasswordComponent,
    TeacherDashboardComponent,
    StudentCartComponent,
    StudentProceedToPayComponent,
    StudentWalletComponent,
    TeacherBatchDetailsComponent,
    TeacherProfileSettingComponent,
    AdminDashboardComponent,
    AdminCuriculumManagementComponent,
    AdminDemoClassesManagementComponent,
    AdminCourseDefaultFeeManagementComponent,
    AdminCourseCategoryManagemnetComponent,
    AdminTeacherManagementComponent,
    AdminTeacherDetailsPageComponent,
    AdminBasedTeacherBatchDetailsComponent,
    AdminDraftStudentsComponent,
    AdminCallbackRequestsComponent,
    AdminAddMoneyToWalletComponent,
    AdminStudentManagementComponent,
    AdminStudentDetailComponent,
    AdminCreateBatchComponent,
    AdminViewBatchComponent,
    AdminUpdateBatchDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [RegistrationService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
