import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class ManageService {

  private header = new BehaviorSubject('');
  private teacherData = new BehaviorSubject({});
  private studentData = new BehaviorSubject({});
  constructor() { }

  getHeaderValue() {
    return this.header.asObservable();
  }

  setHeaderValue(data) {
    this.header.next(data);
  }

  setTeacherData(data) {
    this.teacherData.next(data);
  }

  getTeacherData() {
    return this.teacherData.asObservable();
  }

  setStudentData(data) {
    this.studentData.next(data);
  }

  getStudentData() {
    return this.studentData.asObservable();
  }
}
