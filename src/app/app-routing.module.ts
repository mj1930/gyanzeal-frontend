import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { SignupComponent } from '../app/signup/signup.component';
import { TeacherSignupComponent } from '../app/teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from '../app/student-signup/student-signup.component';


const routes: Routes = [
  // Home Page
  { path: '', component: HomepageComponent },
  // Login Page
  { path: 'login', component: LoginComponent },
  // Common Signup Page
  { path: 'signup', component: SignupComponent },
  // Teacher Signup Page
  { path: 'signup/teacher', component: TeacherSignupComponent },
  // Student Signup Page
  { path: 'signup/student', component: StudentSignupComponent },



  // 404 Error Page
  { path: '**', component: HomepageComponent },
  // No Routes Possible Below This.. :)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
