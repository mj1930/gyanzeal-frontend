import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css'],
  providers: [RegistrationService]
})
export class StudentSignupComponent implements OnInit {

  public studentForm: any;
  public message: string;
  public showMessage: boolean = false;
  public messageClass: boolean = false;
  constructor(
    private register : RegistrationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      fName : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      state : new FormControl('', [Validators.required]),
      city : new FormControl('', [Validators.required]),
      board : new FormControl('', [Validators.required]),
    });
  }

  createAccount() {
    let studentObj = this.studentForm.value;
    if (this.studentForm.valid) {
      this.register.signUpStudent(studentObj).subscribe((data: any) => {
        this.messageClass = true;
        this.showMessage = true;
        this.message = data.message;
        this.studentForm.reset;
        setTimeout(() => {
          this.messageClass = false;
          this.showMessage = false;
          this.message = '';
          if (data.status === 200)
            this.router.navigate(['/login/student']);
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
