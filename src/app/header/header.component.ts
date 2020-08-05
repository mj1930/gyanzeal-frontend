import { Component, OnInit } from '@angular/core';
import { ManageService } from '../services/manage.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: Boolean = false;
  public isLoggedInTeacher: Boolean = false;
  public adminLoggedIn: boolean = false;
  public studentName: string = '';
  public teacherName: string = '';
  constructor(
    private manageService: ManageService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.manageService.getHeaderValue().subscribe((data: any) => {
      if (data) {
        this.isLoggedInTeacher = data.teacher;
        this.isLoggedIn = data.student;
        if (this.isLoggedIn == true) {
          this.manageService.getStudentData().subscribe((data: any) => {
            if (data) {
              this.studentName = data.name;
            }
          });
        }
        if (this.isLoggedInTeacher == true) {
          this.manageService.getTeacherData().subscribe((data: any) => {
            if (data) {
              this.teacherName = data.name;
            }
          })
        }
      }
    })
  }

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/'])
  }

}
