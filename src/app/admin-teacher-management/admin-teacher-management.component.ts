import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-teacher-management',
  templateUrl: './admin-teacher-management.component.html',
  styleUrls: ['./admin-teacher-management.component.css']
})
export class AdminTeacherManagementComponent implements OnInit {

  public teacherLists = [];
  public gzSpecialTeacher = [];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getTeachersList().subscribe((listData: any) => {
      if (listData.status === 200) {
        if (listData.data.length > 0) {
          listData.data.forEach(teacher => {
            if (teacher.typeofTeacher == 'scholastic') {
              this.teacherLists.push(teacher);
            } else if (teacher.typeofTeacher == 'gzSpecial') {
              this.gzSpecialTeacher.push(teacher);
            } else {
              this.teacherLists.push(teacher);
              this.gzSpecialTeacher.push(teacher);
            }
          });
        }
      }
    });
  }

}
