import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {

  public teacherForm: any;
  public message: string;
  public showMessage: boolean = false;
  public messageClass: boolean = false;
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      experienceYear: new FormControl('', [Validators.required]),
      experienceMonth: new FormControl('', [Validators.required]),
      state : new FormControl('', [Validators.required]),
      city : new FormControl('', [Validators.required]),
      school : new FormControl('', [Validators.required]),
      system : new FormControl('', [Validators.required]),
      internetSpeed :  new FormControl('', [Validators.required]),
      compKnow:  new FormControl('', [Validators.required])
    });
  }

  createAccount() {
    let teacherObj = this.teacherForm.value;
    if (this.teacherForm.valid) {
      this.registration.signUpTeacher(teacherObj).subscribe((data: any) => {
        this.messageClass = true;
        this.showMessage = true;
        this.message = data.message;
        this.teacherForm.reset;
        setTimeout(() => {
          this.messageClass = false;
          this.showMessage = false;
          this.message = '';
          if (data.status == 200)
            this.router.navigate(['/login/teacher']);
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
