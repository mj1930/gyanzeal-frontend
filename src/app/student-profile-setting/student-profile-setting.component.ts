import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { ManageService } from '../services/manage.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-student-profile-setting',
  templateUrl: './student-profile-setting.component.html',
  styleUrls: ['./student-profile-setting.component.css']
})
export class StudentProfileSettingComponent implements OnInit {

  public studentForm: any;
  public message: string;
  public showMessage: boolean = false;
  public messageClass: boolean = false;
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private manageService: ManageService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    let tokenData = this.tokenService.getToken();
    this.manageService.setHeaderValue({
      teacher: tokenData.teacher,
      student: tokenData.student
    });

    // To create form
    this.studentForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      schoolName : new FormControl('', [Validators.compose([Validators.required])]),
      schoolBoard : new FormControl('', [Validators.required]),
      className: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
      studentEmail: new FormControl('', [Validators.required]),


      addressLine1: new FormControl('', [Validators.required]),
      addressLine2 : new FormControl('', [Validators.required]),
      city : new FormControl('Kurukshetra', [Validators.required]),
      state : new FormControl('Haryana', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),


      parentName : new FormControl('', [Validators.required]),
      parentNumber: new FormControl('', [Validators.required]),
      parentEmail: new FormControl('', [Validators.required]),
    });


    let email = localStorage.getItem('email');
    this.registration.getStudentProfile(email).subscribe((data: any) => {
      if (data.status == 200) {
        this.setFormValues(data.data);
      }
    });
  }


  setFormValues(data) {
    this.studentForm.controls.name.setValue(data.name);
    this.studentForm.controls.gender.setValue(data.gender);
    this.studentForm.controls.schoolName.setValue(data.schoolName);
    this.studentForm.controls.schoolBoard.setValue(data.schoolBoard);
    this.studentForm.controls.className.setValue(data.className);
    this.studentForm.controls.contactNumber.setValue(data.contactNumber);
    this.studentForm.controls.studentEmail.setValue(data.studentEmail);


    this.studentForm.controls.addressLine1.setValue(data.addressLine1);
    this.studentForm.controls.addressLine2.setValue(data.addressLine2);
    this.studentForm.controls.city.setValue(data.city);
    this.studentForm.controls.state.setValue(data.state);
    this.studentForm.controls.country.setValue(data.country);
    this.studentForm.controls.pinCode.setValue(data.pinCode);


    this.studentForm.controls.parentName.setValue(data.parentName);
    this.studentForm.controls.parentNumber.setValue(data.parentNumber);
    this.studentForm.controls.parentEmail.setValue(data.parentEmail);
  }
  
  updateProfile() {
    let data = this.studentForm.value;
    if (this.studentForm.valid) {
      this.registration.updateStudentProfile(data).subscribe((data:any) => {
        if (data.status === 200) {
          this.setFormValues(data.data);
          this.messageClass = true;
          this.showMessage = true;
          this.message = 'Profile Updated Successfully.';
          setTimeout(() => {
            this.messageClass = false;
            this.showMessage = false;
            this.message = '';
          }, 5000);
        }
      });
    } else {
      this.messageClass = false;
      this.showMessage = true;
      this.message = 'Please Complete The Form.';
      setTimeout(() => {
        this.messageClass = false;
        this.showMessage = false;
        this.message = '';
      }, 5000);
    }
  }

}
