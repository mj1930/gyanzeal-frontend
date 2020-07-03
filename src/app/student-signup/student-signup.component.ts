import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

  createAccount() {
    let studentObj = {
      name: this.name,
      fName: this.fName,
      gender: this.gender,
      mobile: this.mobile,
      email: this.email,
      password: this.password,
      state: this.state,
      city: this.city,
      board: this.board
    };
  }

  checkValidations(key, value) {
    if (key == 'name') {
      if (value.trim() == '') {
        this.nameSpace = false;
      } else if (value.length < 3) {
        this.nameShort = false;
      } else if (value.length > 30) {
        this.nameLong = false;
      } else {
        this.nameSpace = true;
        this.nameLong = true;
        this.nameShort = true;
      }
    }
    if (key == 'fName') {
      if (value.trim() == '') {
        this.fnameSpace = false;
      } else if (value.length < 3) {
        this.fnameShort = false;
      } else if (value.length > 30) {
        this.fnameLong = false;
      } else {
        this.fnameSpace = true;
        this.fnameLong = true;
        this.fnameShort = true;
      }
    }
    if (key == 'gender') {
      if (value == 0) {
        this.genderCheck = false;
      } else {
        this.genderCheck = true;
      }
    }
  }

}
