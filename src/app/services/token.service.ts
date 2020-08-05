import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ManageService } from './manage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  helper = new JwtHelperService();
  isTeacher = 'false';
  isStudent = 'false';
  constructor(
    private manageService: ManageService
  ) { }

  verifyToken(token) {
    let tokenData = this.helper.decodeToken(token);
    if (tokenData.isTeacher) {
      this.isTeacher = tokenData.isTeacher;
      localStorage.setItem('isTeacher', tokenData.isTeacher);
    }
    else {
      localStorage.setItem('isTeacher', this.isTeacher);
    }
    if (tokenData.isStudent) {
      this.isStudent = tokenData.isStudent;
      localStorage.setItem('isStudent', tokenData.isStudent);
    } else {
      localStorage.setItem('isStudent', tokenData.isStudent);
    }
    localStorage.setItem('email', tokenData.emailAddress);
    this.setToken()
  }

  setToken() {
    this.manageService.setHeaderValue({
      teacher: this.isTeacher, student: this.isStudent
    });
  }

  deleteToken() {
    localStorage.removeItem('isTeacher');
    localStorage.removeItem('isStudent');
    localStorage.removeItem('email');
    this.manageService.setHeaderValue({});
    this.manageService.setTeacherData({});
    this.manageService.setStudentData({});
  }

  getToken() {
    return {
      teacher: this.isTeacher,
      student: this.isStudent
    }
  }
}
