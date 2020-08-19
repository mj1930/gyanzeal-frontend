import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { RegistrationService } from "../services/registration.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-teacher-signup",
  templateUrl: "./teacher-signup.component.html",
  styleUrls: ["./teacher-signup.component.css"],
})
export class TeacherSignupComponent implements OnInit {
  public teacherForm: any;
  public message: string;
  public showMessage: boolean = false;
  public messageClass: boolean = false;
  phoneNumber = "^[0-9]{10}$";
  public city = [
    {
      state: "Haryana",
      city: "Faridabad",
    },
    {
      state: "Haryana",
      city: "Kurukshetra",
    },
    {
      state: "Haryana",
      city: "Gurugram",
    },
    {
      state: "Haryana",
      city: "Panipat",
    },
    {
      state: "Haryana",
      city: "Ambala",
    },
    {
      state: "Haryana",
      city: "Yamunanagar",
    },
    {
      state: "Haryana",
      city: "Rohtak",
    },
    {
      state: "Haryana",
      city: "Hisar",
    },
    {
      state: "Haryana",
      city: "Karnal",
    },
    {
      state: "Haryana",
      city: "Sonipat",
    },
    {
      state: "Haryana",
      city: "Panchkula",
    },
    {
      state: "Haryana",
      city: "Bhiwani",
    },
    {
      state: "Haryana",
      city: "Sirsa",
    },
    {
      state: "Haryana",
      city: "Bahadurgarh",
    },
    {
      state: "Haryana",
      city: "Jind",
    },
    {
      state: "Haryana",
      city: "Thanesar",
    },
    {
      state: "Haryana",
      city: "Kaithal",
    },
    {
      state: "Haryana",
      city: "Rewari",
    },
    {
      state: "Haryana",
      city: "Palwal",
    },
    {
      state: "Haryana",
      city: "Pundri",
    },
    {
      state: "Haryana",
      city: "Kosli",
    },
  ];
  public schoolsList = [
    {
      school: "Bharat Public Senior Secondary School (Babain)",
      city: "Kurukshetra",
    },
    {
      school: "Daffodil Public School (Chammon)",
      city: "Kurukshetra",
    },
    {
      school: "Bharat International Public School (Dhurala)",
      city: "Kurukshetra",
    },
    {
      school: "Doon Public School (Indri Road)",
      city: "Kurukshetra",
    },
    {
      school: "A K Dav Public School (Ismailabad)",
      city: "Kurukshetra",
    },
    {
      school: "Guru Nanak Vatika Public School (Ismailabad)",
      city: "Kurukshetra",
    },
    {
      school: "Manish Papneja Memorial Public School (Ismailabad)",
      city: "Kurukshetra",
    },
    {
      school: "Lal Chand Mal Public School (Jhansa)",
      city: "Kurukshetra",
    },
    {
      school: "M. S. Senior Sec. School (Jhansa)",
      city: "Kurukshetra",
    },
    {
      school: "Shri Harkrishan Public School (Jhansa)",
      city: "Kurukshetra",
    },
    {
      school: "Aggarsain Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "B R International Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Dav Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Delhi Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Gita Niketan Awasiya Vidyalaya (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Greenfield Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Gurukul  (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Gyandeep Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Kurukshetra Model School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Maharana Pratap Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Sahara Comprehensive School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Saini Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Seth Tekchand Memorial Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Shri Mahavir Jain Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Sks International Gurukul (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Springdale Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "St Thomus Convent School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Tagore Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Teri Public School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "The Millennium School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "University Sr Sec Model School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "University Sr Sec Model School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "Wisdom World School (Kurukshetra)",
      city: "Kurukshetra",
    },
    {
      school: "H.C. Memorial Public School (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Mother Teresa Modern Public School (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Om Parkash Garg Memorial Public School  (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Sanjay Gandhi Memorial Pub Vidyalaya (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Sugni Devi Arya Girls Senior Secondary School (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Unique Shiksha Niketan (Ladwa)",
      city: "Kurukshetra",
    },
    {
      school: "Smt Kesari Devi Lohia Public School (Lohar Majra)",
      city: "Kurukshetra",
    },
    {
      school: "Dav Public School Lukhi (Lukhi)",
      city: "Kurukshetra",
    },
    {
      school: "Jawahar Navodaya Vidyalaya (Niwarsi)",
      city: "Kurukshetra",
    },
    {
      school: "D A V Centenary Public School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Deewal International School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Himalaya Public School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Mount Litera Zee School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Sant Ishar Singh Academy (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Sant Nischal Singh Public School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Tagore Public School (Pehowa)",
      city: "Kurukshetra",
    },
    {
      school: "Som Convent Gurukul (Pindarsi)",
      city: "Kurukshetra",
    },
    {
      school: "Maharishi Vidya Mandir (Pipli)",
      city: "Kurukshetra",
    },
    {
      school: "Pooja Modern Public School (Pipli)",
      city: "Kurukshetra",
    },
    {
      school: "Dav Centernary Public School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Divine Public School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Maharaja Aggarsain Public School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Mata Rukmani Rai Arya Girls Secondary School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Mata Rukmani Rai Arya Middle School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Ram Prasad Dav Public School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Satluj Senior Secondary School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Savitri Bai Senior Secondary  School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Vishvas Public  School (Shahbad)",
      city: "Kurukshetra",
    },
    {
      school: "Radha Krishan Public School (V.P.O. Thol)",
      city: "Kurukshetra",
    },
    {
      school: "The Olive School (V.P.O. Thol)",
      city: "Kurukshetra",
    },
    {
      school: "Kanya Gurukul (Vil. Bachganwan)",
      city: "Kurukshetra",
    },
    {
      school: "Shahid Bhagat Singh High School (Vil. Baraut)",
      city: "Kurukshetra",
    },
    {
      school: "Adarsh Sr. Sec. Schiool (Vil. Bhargat)",
      city: "Kurukshetra",
    },
    {
      school: "Wellwisher Public Sen. Sec. School (Vil. Bhodhani)",
      city: "Kurukshetra",
    },
    {
      school: "Maharaja Aggarsain Senior Public School (Vil. Dabkheri)",
      city: "Kurukshetra",
    },
    {
      school: "Jai Hind Public School (Vil. Dudhi)",
      city: "Kurukshetra",
    },
    {
      school: "Indraprasth Public School (Vil. Dyalpur)",
      city: "Kurukshetra",
    },
    {
      school: "Kite International Public School (Vil. Ghararsi)",
      city: "Kurukshetra",
    },
    {
      school: "Jai Hind High School Gudha Distt Kurukshetra (Vil. Gudha)",
      city: "Kurukshetra",
    },
    {
      school: "Guru Nanak Dev Academy (Vil. Gumthala)",
      city: "Kurukshetra",
    },
    {
      school: "Yuva Shakti Sen Secondary Scohool (Vil. Kanipla)",
      city: "Kurukshetra",
    },
    {
      school: "Ashtvinayak Public School (Vil. Kharkali)",
      city: "Kurukshetra",
    },
    {
      school: "Alpine Public School (Vil. Padlu)",
      city: "Kurukshetra",
    },
    {
      school: "Shri Guru Harkrishan Convent School (Vil. Rawa)",
      city: "Kurukshetra",
    },
  ];
  public coursesArray = [];
  public gzSpecialCourses = [];
  public selectedCity = [];
  constructor(
    private fb: FormBuilder,
    private registration: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [
        Validators.compose([
          Validators.required,
          Validators.pattern(this.phoneNumber),
        ]),
      ]),
      email: new FormControl("", [
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ]),
      ]),
      experienceYear: new FormControl("", [Validators.required]),
      experienceMonth: new FormControl("", [Validators.required]),
      state: new FormControl("Haryana", [Validators.required]),
      city: new FormControl("Kurukshetra", [Validators.required]),
      school: new FormControl("", [Validators.required]),
      system: new FormControl("", [Validators.required]),
      internetSpeed: new FormControl("", [Validators.required]),
      compKnow: new FormControl("", [Validators.required]),
      courses: new FormControl("", []),
      classes: new FormControl("", []),
      gzcourses: new FormControl("", []),
      gzclasses: new FormControl("", []),
    });
    this.onSelectState("Haryana");
  }

  createAccount() {
    let teacherObj = this.teacherForm.value;
    if (!this.checkAndUpdateCourseAndClasses()) {
      return;
    }
    if (this.teacherForm.valid) {
      this.registration.signUpTeacher(teacherObj).subscribe((data: any) => {
        this.messageClass = true;
        this.showMessage = true;
        this.message = data.message;
        this.teacherForm.reset;
        setTimeout(() => {
          this.messageClass = false;
          this.showMessage = false;
          this.message = "";
          if (data.status == 200) this.router.navigate(["/login/teacher"]);
        }, 2000);
      });
    } else {
      this.messageClass = false;
      this.showMessage = true;
      this.message = "Please fill the complete form";
      setTimeout(() => {
        this.messageClass = true;
        this.showMessage = false;
        this.message = "";
      }, 2000);
    }
  }

  onSelectState(state) {
    this.selectedCity = [];
    this.city.filter((city) => {
      if (city.state == state) {
        this.selectedCity.push(city.city);
      }
    });
    if (this.selectedCity.length === 0) {
      this.teacherForm.controls.city.setValue("none");
    }
  }

  addSubject() {
    let courseArray = this.coursesArray;
    let selectedCourse = this.teacherForm.controls.courses.value;
    if (courseArray.length > 0 && courseArray.indexOf(selectedCourse) == -1) {
      this.teacherForm.controls.courses.patchValue(selectedCourse);
      this.coursesArray = this.coursesArray.concat(
        this.teacherForm.controls.courses.value
      );
    } else {
      this.coursesArray = this.teacherForm.controls.courses.value;
    }
  }

  addGZSpecialSubject() {
    let courseArray = this.gzSpecialCourses;
    let selectedCourse = this.teacherForm.controls.gzcourses.value;
    if (courseArray.length > 0 && courseArray.indexOf(selectedCourse) == -1) {
      this.teacherForm.controls.gzcourses.patchValue(selectedCourse);
      this.gzSpecialCourses = this.gzSpecialCourses.concat(
        this.teacherForm.controls.gzcourses.value
      );
    } else {
      this.gzSpecialCourses = this.teacherForm.controls.gzcourses.value;
    }
  }

  checkAndUpdateCourseAndClasses() {
    if (this.coursesArray.length == 0 && this.gzSpecialCourses.length == 0) {
      this.messageClass = false;
      this.showMessage = true;
      this.message = "Please select atleast one course";
      setTimeout(() => {
        this.messageClass = true;
        this.showMessage = false;
        this.message = "";
      }, 2000);
      return false;
    } else if (
      this.coursesArray.length > 0 &&
      this.gzSpecialCourses.length > 0
    ) {
      this.teacherForm.controls.courses.setValue(this.coursesArray);
      this.teacherForm.controls.courses.patchValue(this.gzSpecialCourses);
    } else if (this.coursesArray.length > 0) {
      this.teacherForm.controls.courses.setValue(this.coursesArray);
    } else {
      this.teacherForm.controls.courses.setValue(this.gzSpecialCourses);
    }
  }
}
