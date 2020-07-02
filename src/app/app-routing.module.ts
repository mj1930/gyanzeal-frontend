import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from '../app/homepage/homepage.component';
import { TeacherSignupComponent } from '../app/teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from '../app/student-signup/student-signup.component';
import { TeacherLoginComponent } from '../app/teacher-login/teacher-login.component';
import { StudentLoginComponent } from '../app/student-login/student-login.component';
import { StudentPasswordResetComponent } from '../app/student-password-reset/student-password-reset.component';
import { TeacherPasswordResetComponent } from '../app/teacher-password-reset/teacher-password-reset.component';



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



  // 404 Error Page
  { path: '**', component: ErrorPageNotFoundComponent },
  // No Routes Possible Below This.. :)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
