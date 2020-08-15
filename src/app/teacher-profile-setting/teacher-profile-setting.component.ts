import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-teacher-profile-setting',
  templateUrl: './teacher-profile-setting.component.html',
  styleUrls: ['./teacher-profile-setting.component.css']
})
export class TeacherProfileSettingComponent implements OnInit {

  public teacherForm: any;
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService
  ) { }

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.compose([Validators.required])]),
      email : new FormControl('', [Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])]),
      experienceYear: new FormControl('', [Validators.required]),
      experienceMonth: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      state : new FormControl('Haryana', [Validators.required]),
      city : new FormControl('Kurukshetra', [Validators.required]),
      country: new FormControl('Kurukshetra', [Validators.required]),
      pinCode: new FormControl('Kurukshetra', [Validators.required]),
      school : new FormControl('', [Validators.required]),
      pan: new FormControl('', [Validators.required]),
      aadhar: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required]),
      ifscCode: new FormControl('', [Validators.required]),
      upi: new FormControl(''),
      password:  new FormControl('' ),
      repeatPassword:  new FormControl('')
    });
    let email = localStorage.getItem('email');
    this.registration.getTeacherProfile(email).subscribe((data: any) => {
      if (data.status == 200) {
        this.setFormValues(data.data);
      }
    });
  }

  setFormValues(data) {
    this.teacherForm.controls.name.setValue(data.name);
    this.teacherForm.controls.gender.setValue(data.gender);
    this.teacherForm.controls.mobile.setValue(data.mobile);
    this.teacherForm.controls.email.setValue(data.email);
    this.teacherForm.controls.experienceYear.setValue(data.experienceYear);
    this.teacherForm.controls.experienceMonth.setValue(data.experienceMonth);
    this.teacherForm.controls.address1.setValue(data.address1);
    this.teacherForm.controls.address2.setValue(data.address2);
    this.teacherForm.controls.state.setValue(data.state);
    this.teacherForm.controls.city.setValue(data.city);
    this.teacherForm.controls.country.setValue(data.country);
    this.teacherForm.controls.pinCode.setValue(data.pinCode);
    this.teacherForm.controls.school.setValue(data.school);
    this.teacherForm.controls.pan.setValue(data.pan);
    this.teacherForm.controls.aadhar.setValue(data.aadhar);
    this.teacherForm.controls.bankName.setValue(data.bankName);
    this.teacherForm.controls.accountNumber.setValue(data.accountNumber);
    this.teacherForm.controls.ifscCode.setValue(data.ifscCode);
    this.teacherForm.controls.upi.setValue(data.upi);
  }
  
  updateProfile() {
    let data = this.teacherForm.values;
    this.registration.updateTeacherProfile(data).subscribe((data:any) => {
      if (data.status === 200) {
        this.setFormValues(data.data);
      }
    })
  }
}
