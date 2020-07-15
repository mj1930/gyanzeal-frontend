import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../app/homepage/homepage.component';
import { TeacherSignupComponent } from '../app/teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from '../app/student-signup/student-signup.component';
import { TeacherLoginComponent } from '../app/teacher-login/teacher-login.component';
import { StudentLoginComponent } from '../app/student-login/student-login.component';
import { StudentPasswordResetComponent } from '../app/student-password-reset/student-password-reset.component';
import { TeacherPasswordResetComponent } from '../app/teacher-password-reset/teacher-password-reset.component';
import { StudentDashboardComponent } from '../app/student-dashboard/student-dashboard.component';
import { StudentEnrolledCoursesComponent } from '../app/student-enrolled-courses/student-enrolled-courses.component';
import { StudentPurchaseHistoryComponent } from '../app/student-purchase-history/student-purchase-history.component';
import { StudentProfileSettingComponent } from '../app/student-profile-setting/student-profile-setting.component';
import { ChangePasswordComponent } from '../app/change-password/change-password.component';
import { TeacherDashboardComponent } from '../app/teacher-dashboard/teacher-dashboard.component';
import { StudentCartComponent } from '../app/student-cart/student-cart.component';
import { StudentProceedToPayComponent } from '../app/student-proceed-to-pay/student-proceed-to-pay.component';
import { StudentWalletComponent } from '../app/student-wallet/student-wallet.component';



// 404 Error Page Not Found
import { ErrorPageNotFoundComponent } from '../app/error-page-not-found/error-page-not-found.component';


const routes: Routes = [
  // Home Page
  { path: '', component: HomepageComponent },
  // Teacher Signup Page
  { path: 'signup/teacher', component: TeacherSignupComponent },
  // Student Signup Page
  { path: 'signup/student', component: StudentSignupComponent },
  // Teacher Login Page
  { path: 'login/teacher', component: TeacherLoginComponent },
  // Student Login Page
  { path: 'login/student', component: StudentLoginComponent },
  // Student Reset Password Page
  { path: 'reset-password/student', component: StudentPasswordResetComponent },
  // Student Reset Password Page
  { path: 'reset-password/teacher', component: TeacherPasswordResetComponent },
  // Student Enrolled Courses Page
  { path: 'my-courses', component: StudentEnrolledCoursesComponent },
  // Student Purchase history Page
  { path: 'my-purchases', component: StudentPurchaseHistoryComponent },
  // Student Profile Page
  { path: 'profile-setting', component: StudentProfileSettingComponent },
  // Change Password Page
  { path: 'change-password', component: ChangePasswordComponent },
  // Change Password Page
  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  // Student Cart Page
  { path: 'cart', component: StudentCartComponent },
  // Student Proceed to Pay Page
  { path: 'securepay', component: StudentProceedToPayComponent },
  // Student Wallet Page
  { path: 'mywallet', component: StudentWalletComponent },

  
  // Student Dashboard Page
  { path: 'student-dashboard', component: StudentDashboardComponent },



  // 404 Error Page
  { path: '**', component: ErrorPageNotFoundComponent },
  // No Routes Possible Below This.. :)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
