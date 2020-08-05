import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ManageService } from '../services/manage.service';
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  teacherLoginForm: any;
  public message: string;
  public showMessage: boolean = false;
  public messageClass: boolean = false;
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router,
    private manageService: ManageService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.teacherLoginForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  login() {
    if (this.teacherLoginForm.valid) {
      this.teacherLoginForm.reset;
      this.registration.loginTeacher(this.teacherLoginForm.value).subscribe((data: any) => {
        setTimeout(() => {
          this.messageClass = false;
          this.showMessage = false;
          this.message = '';
          if (data.status == 200) {
            this.tokenService.verifyToken(data.token);
            this.manageService.setTeacherData(data.data);
            this.router.navigate(['/teacher-dashboard']);
          }
        }, 2000);
      });
    } else {
      this.messageClass = false;
      this.showMessage = true;
      this.message = 'Please fill the complete form';
      setTimeout(() => {
        this.messageClass = true;
        this.showMessage = false;
        this.message = '';
      }, 2000);
    }
  }

}
