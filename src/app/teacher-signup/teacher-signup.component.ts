import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
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
  phoneNumber = "^[0-9]{10}$";
  public city = [
    {
      "state": "Haryana",
      "city": "Faridabad"
    },
    {
      "state": "Haryana",
      "city": "Kurukshetra"
    },
    {
      "state": "Haryana",
      "city": "Gurugram"
    },
    {
      "state": "Haryana",
      "city": "Panipat"
    },
    {
      "state": "Haryana",
      "city": "Ambala"
    },
    {
          "state": "Haryana",
          "city": "Yamunanagar"
    },
    {
      "state": "Haryana",
      "city": "Rohtak"
    },
    {
      "state": "Haryana",
      "city": "Hisar"
    },
    {
      "state": "Haryana",
      "city": "Karnal"
    },
    {
      "state": "Haryana",
      "city": "Sonipat"
    },
    {
      "state": "Haryana",
      "city": "Panchkula"
    },
    {
      "state": "Haryana",
      "city": "Bhiwani"
    },
    {
      "state": "Haryana",
      "city": "Sirsa"
    },
    {
      "state": "Haryana",
      "city": "Bahadurgarh"
    },
    {
      "state": "Haryana",
      "city": "Jind"
    },
    {
      "state": "Haryana",
      "city": "Thanesar"
    },
    {
      "state": "Haryana",
      "city": "Kaithal"
    },
    {
      "state": "Haryana",
      "city": "Rewari"
    },
    {
      "state": "Haryana",
      "city": "Palwal"
    },
    {
      "state": "Haryana",
      "city": "Pundri"
    },
    {
      "state": "Haryana",
      "city": "Kosli"
    }
  ];
  public selectedCity = [];
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name : new FormControl('', [Validators.required]),
      gender : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.compose([Validators.required, Validators.pattern(this.phoneNumber)])]),
      email : new FormControl('', [Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])]),
      experienceYear: new FormControl('', [Validators.required]),
      experienceMonth: new FormControl('', [Validators.required]),
      state : new FormControl('Haryana', [Validators.required]),
      city : new FormControl('Kurushetra', [Validators.required]),
      school : new FormControl('', [Validators.required]),
      system : new FormControl('', [Validators.required]),
      internetSpeed :  new FormControl('', [Validators.required]),
      compKnow:  new FormControl('', [Validators.required])
    });
    this.onSelectState('Haryana')
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
  
  onSelectState(state) {
    this.selectedCity = [];
    this.city.filter(city => {
      if (city.state == state) {
        this.selectedCity.push(city.city);
      }
    });
    if (this.selectedCity.length === 0) {
      this.teacherForm.controls.city.setValue('none');
    }
  }

}
