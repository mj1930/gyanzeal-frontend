import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ManageService } from '../services/manage.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private manageService: ManageService
  ) { }

  ngOnInit() {
    let tokenData = this.tokenService.getToken();
    this.manageService.setHeaderValue({
      teacher: tokenData.teacher,
      student: tokenData.student
    });
  }

}
