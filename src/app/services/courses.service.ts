import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http:HttpClient
  ) { }

  addBoard(courseName) {
    return this.http.post(`${environment.url}course/add-course`, {courseName});
  }

  fetchBoard(){
    return this.http.get(`${environment.url}course/get-courses`);
  }
}
