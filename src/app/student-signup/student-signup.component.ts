import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { RegistrationService } from '../services/registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css'],
  providers: [RegistrationService]
})
export class StudentSignupComponent implements OnInit {

  public studentForm: any;
  public name: string;
  public fName: string;
  public gender: string;
  public mobile: Number;
  public email: string;
  public password: string;
  public state: string;
  public city: string;
  public board: string;
  public nameLong: boolean = true;
  public nameSpace: boolean = true;
  public nameShort: boolean = true;
  public fnameLong: boolean = true;
  public fnameSpace: boolean = true;
  public fnameShort: boolean = true;
  public genderCheck: boolean = true;
  constructor(
    private register : RegistrationService,
    private toast: ToastrService,
    private fb: FormBuilder
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
        console.log(data)
        this.studentForm.reset;
      });
    } else {
      this.toast.warning('Please fill the complete form');
    }
  }


}
