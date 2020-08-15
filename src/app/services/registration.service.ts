import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  signUpStudent(studentData: any) {
    return this.http.post(`${environment.url}student/student-signUp`, {studentData});
  }

  signUpTeacher(teacherData: any) {
    return this.http.post(`${environment.url}teacher/teacher-signup`, {teacherData});
  }

  loginStudent(loginData) {
    return this.http.post(`${environment.url}student/login`, {loginData})
  }

  loginTeacher(loginData) {
    return this.http.post(`${environment.url}teacher/login`, {loginData})
  }

  getTeacherProfile(email) {
    return this.http.get(`${environment.url}teacher/fetch-profile?email=${email}`);
  }

  updateTeacherProfile(profileData) {
    return this.http.post(`${environment.url}teacher/update-profile`, {profileData});
  }
}
