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
import { TeacherBatchDetailsComponent } from '../app/teacher-batch-details/teacher-batch-details.component';
import { TeacherProfileSettingComponent } from '../app/teacher-profile-setting/teacher-profile-setting.component';
import { AdminDashboardComponent } from '../app/admin-dashboard/admin-dashboard.component';
import { AdminCuriculumManagementComponent } from '../app/admin-curiculum-management/admin-curiculum-management.component';
import { AdminDemoClassesManagementComponent } from '../app/admin-demo-classes-management/admin-demo-classes-management.component';
import { AdminCourseDefaultFeeManagementComponent } from '../app/admin-course-default-fee-management/admin-course-default-fee-management.component';
import { AdminCourseCategoryManagemnetComponent } from '../app/admin-course-category-managemnet/admin-course-category-managemnet.component';
import { AdminTeacherManagementComponent } from '../app/admin-teacher-management/admin-teacher-management.component';
import { AdminTeacherDetailsPageComponent } from '../app/admin-teacher-details-page/admin-teacher-details-page.component';
import { AdminBasedTeacherBatchDetailsComponent } from '../app/admin-based-teacher-batch-details/admin-based-teacher-batch-details.component';
import { AdminDraftStudentsComponent } from '../app/admin-draft-students/admin-draft-students.component';
import { AdminCallbackRequestsComponent } from '../app/admin-callback-requests/admin-callback-requests.component';
import { AdminAddMoneyToWalletComponent } from '../app/admin-add-money-to-wallet/admin-add-money-to-wallet.component';
import { AdminStudentManagementComponent } from '../app/admin-student-management/admin-student-management.component';
import { AdminStudentDetailComponent } from '../app/admin-student-detail/admin-student-detail.component';
import { AdminCreateBatchComponent } from '../app/admin-create-batch/admin-create-batch.component';
import { AdminViewBatchComponent } from '../app/admin-view-batch/admin-view-batch.component';
import { AdminUpdateBatchDetailsComponent } from '../app/admin-update-batch-details/admin-update-batch-details.component';






// 404 Error Page Not Found
import { ErrorPageNotFoundComponent } from '../app/error-page-not-found/error-page-not-found.component';


const routes: Routes = [

  // Website Routes
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
  // Change Password Page
  { path: 'change-password', component: ChangePasswordComponent },

  



  // Teacher Section
  // Teacher Dashboard Page
  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  // Teacher Batch Detail Page
  { path: 'batch-details', component: TeacherBatchDetailsComponent },
  // Teacher Profile Setting Page
  { path: 'teacher-profile-setting', component: TeacherProfileSettingComponent },

  
  


  // Student Section
  // Student Dashboard Page
  { path: 'student-dashboard', component: StudentDashboardComponent },
  // Student Cart Page
  { path: 'cart', component: StudentCartComponent },
  // Student Proceed to Pay Page
  { path: 'securepay', component: StudentProceedToPayComponent },
  // Student Wallet Page
  { path: 'mywallet', component: StudentWalletComponent },
  // Student Enrolled Courses Page
  { path: 'my-courses', component: StudentEnrolledCoursesComponent },
  // Student Purchase history Page
  { path: 'my-purchases', component: StudentPurchaseHistoryComponent },
  // Student Profile Page
  { path: 'profile-setting', component: StudentProfileSettingComponent },





  // Admin Section
  // Admin Dashboard Page
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  // Admin Curiculum Management Page
  { path: 'curriculum-management', component: AdminCuriculumManagementComponent },
  // Admin Demo Classes Management Page
  { path: 'demo-classes-management', component: AdminDemoClassesManagementComponent },
  // Admin Course Default Fees Management Page
  { path: 'course-default-fee', component: AdminCourseDefaultFeeManagementComponent },
  // Admin Course Category Management Page
  { path: 'course-category-management', component: AdminCourseCategoryManagemnetComponent },
  // Admin Teacher Management Page
  { path: 'teacher-management', component: AdminTeacherManagementComponent },
  // Admin Teacher Details Page
  { path: 'admin-teacher-details-page/:id', component: AdminTeacherDetailsPageComponent },
  // Admin Based Teacher Batch Details Page
  { path: 'teacher-batch-details-page', component: AdminBasedTeacherBatchDetailsComponent },
  // Admin Draft Students Details Page
  { path: 'draft-students', component: AdminDraftStudentsComponent },
  // Admin Draft Students Details Page
  { path: 'callback-requests', component: AdminCallbackRequestsComponent },
  // Admin Add Money To Wallet Page
  { path: 'add-money-to-wallet', component: AdminAddMoneyToWalletComponent },
  // Admin Student Management Page
  { path: 'student-management', component: AdminStudentManagementComponent },
  // Admin Student Management Page
  { path: 'admin-student-detail', component: AdminStudentDetailComponent },
  // Admin Create batch
  { path: 'create-batch', component: AdminCreateBatchComponent },
  // Admin View batch
  { path: 'view-batch', component: AdminViewBatchComponent },
  // Admin Update batch Deatils Page
  { path: 'update-batch-details', component: AdminUpdateBatchDetailsComponent },

  
  // 404 Error Page
  { path: '**', component: ErrorPageNotFoundComponent },
  // No Routes Possible Below This.. :)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
