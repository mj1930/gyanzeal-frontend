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
    StudentWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
