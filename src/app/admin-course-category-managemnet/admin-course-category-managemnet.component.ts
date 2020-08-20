import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "app-admin-course-category-managemnet",
  templateUrl: "./admin-course-category-managemnet.component.html",
  styleUrls: ["./admin-course-category-managemnet.component.css"],
})
export class AdminCourseCategoryManagemnetComponent implements OnInit {
  // Add Board Variables
  public educationBoard: String;
  public showBoardError: Boolean = false;
  public boardErrorMessage: String = "";

  // Add Class
  public selectedBoard: String;
  public className: String;
  public showaddClassError: Boolean = false;
  public errorMessage: String = "";

  // Add Subject
  public subjectName: String;
  public boardOfSubject: String;
  public classofSubject: String;
  public showSubjectError: Boolean = false;
  public subjectMessage: String = "";

  // Add Course Type
  public courseType: String;
  public courseTypeName: String;
  public courseTypeMessage: String = "";
  public showCourseTypeMessage: Boolean = false;

  // Add Course Name
  public courseNameGZ: String;
  public selectCourseType: String;
  public CourseMessageGZ: String = "";
  public showCourseMessageGZ: Boolean = false;

  // show board
  public boardSelection: String;
  public boardName: String;
  public BoardUpdateMessage: String = "";
  public showBoardUpdateMessage: Boolean = false;

  // Update Class
  public selectBoardForClass: String;
  public selectClassForUpdate: String;
  public showClassUpdateMessage: Boolean = false;
  public classUpdateMessage: String = "";
  public classValue: String;

  // Update Subject
  public selectBoardForSubject: String;
  public selectClassForSubject: String;
  public selectSubjectForUpdate: String;
  public subjectValue: String;
  public showSubjectUpdateMessage: Boolean = false;
  public subjectUpdateMessage: String = "";

  // Array list
  public boardList = [];
  public classList = [];
  public filterClassList = [];
  public subjectList = [];
  public filterSubjectList = [];

  public courseTypeList = [];
  constructor(private courseService: CoursesService) {}
  ngOnInit() {
    // this.courseService.fetchBoard().subscribe((fetchBoards: any) => {
    //   if (fetchBoards.status === 200) {
    //     if (fetchBoards.data.length > 0) {
    //       fetchBoards.data.forEach((board) => {
    //         this.boardList.push({
    //           id: board._id,
    //           name: board.name
    //         });
    //       });
    //     }
    //   }
    // });
  }

  // Add Board Function
  addBoard() {
    let data = this.educationBoard ? this.educationBoard.trim() : "";
    if (data) {
      this.showBoardError = false;
      // Empty The Box On Success
      this.educationBoard = "";
      this.boardList.push({
        board: data,
      });
      // this.courseService.addBoard(data).subscribe((courseData: any) => {
      //   if (courseData.status === 200) {
      //     this.boardList.push({
      //         id: courseData._id,
      //         name: courseData.name
      //       });
      //     this.showBoardError = true;
      //     this.boardErrorMessage = "Success";
      //   } else {
      //     this.showBoardError = true;
      //     this.boardErrorMessage = courseData.message;
      //   }
      // });
    } else {
      this.showBoardError = true;
      this.boardErrorMessage = "Cannot Be Blank";
      setTimeout(() => {
        this.showBoardError = false;
        this.boardErrorMessage = "";
      }, 2000);
    }
  }

  // Add Class
  addClass() {
    let data = this.selectedBoard;
    let className = this.className;
    if (data) {
      this.showaddClassError = false;
      if (className) {
        this.showaddClassError = false;
        this.classList.push({
          board: data,
          className,
        });
        // Empty The Box On Success
        this.showaddClassError = true;
        this.errorMessage = "Success";
        setTimeout(() => {
          this.errorMessage = "";
        }, 2000);
        this.className = "";
      } else {
        this.showaddClassError = true;
        this.errorMessage = "Class Name Cannot Be Empty";
        setTimeout(() => {
          this.showaddClassError = false;
          this.errorMessage = "";
        }, 2000);
      }
    } else {
      this.showaddClassError = true;
      this.errorMessage = "Please Select At Least One 'Board Of Education'";
      setTimeout(() => {
        this.showaddClassError = false;
        this.errorMessage = "";
      }, 2000);
    }
  }

  // Add Subject
  addSubject() {
    let board = this.boardOfSubject;
    let className = this.classofSubject;
    let subjectName = this.subjectName;

    if (board) {
      this.showSubjectError = false;
      if (className) {
        if (subjectName) {
          this.subjectList.push({
            board: board,
            className: className,
            subjectName: subjectName,
          });
          // Empty The Box On Success
          this.showSubjectError = true;
          this.subjectMessage = "Success";
          setTimeout(() => {
            this.subjectMessage = "";
          }, 2000);
          this.className = "";
        } else {
          this.showSubjectError = true;
          this.subjectMessage = "Subject Name Cannot Be Empty'";
          setTimeout(() => {
            this.showSubjectError = false;
            this.subjectMessage = "";
          }, 2000);
        }
      } else {
        this.showSubjectError = true;
        this.subjectMessage = "Class Not Selected'";
        setTimeout(() => {
          this.showSubjectError = false;
          this.subjectMessage = "";
        }, 2000);
      }
    } else {
      this.showSubjectError = true;
      this.subjectMessage = "Please Select At Least One 'Board Of Education'";
      setTimeout(() => {
        this.showSubjectError = false;
        this.subjectMessage = "";
      }, 2000);
    }
  }

  // Select Class
  selectClass(event) {
    this.filterClassList = [];
    this.classList.filter((classValue) => {
      if (classValue.board == event.target.value) {
        this.filterClassList.push(classValue);
      }
    });
  }

  // Add Course Type
  addCourseType() {
    let data = this.courseTypeName ? this.courseTypeName.trim() : "";
    if (data) {
      this.courseTypeList.push(data);
      this.showCourseTypeMessage = true;
      this.courseTypeName = "";
      this.courseTypeMessage = "Success";
      setTimeout(() => {
        this.showCourseTypeMessage = false;
        this.courseTypeMessage = "";
      }, 2000);
    } else {
      this.showCourseTypeMessage = true;
      this.courseTypeMessage = "'Course Type' Cannot Be Empty";
      setTimeout(() => {
        this.showCourseTypeMessage = false;
        this.courseTypeMessage = "";
      }, 2000);
    }
  }

  // Add Course Name
  addCourseName() {
    let courseNameGZ = this.courseNameGZ ? this.courseNameGZ.trim() : "";
    let courseType = this.selectCourseType;

    if (courseType) {
      if (courseNameGZ) {
        // XHR Request To Go Here...

        this.courseNameGZ = "";
        this.showCourseMessageGZ = true;
        this.CourseMessageGZ = "Success";
        setTimeout(() => {
          this.showCourseMessageGZ = false;
          this.CourseMessageGZ = "";
        }, 2000);
      } else {
        this.showCourseMessageGZ = true;
        this.CourseMessageGZ = "'Course Name' Cannot Be Empty";
        setTimeout(() => {
          this.showCourseMessageGZ = false;
          this.CourseMessageGZ = "";
        }, 2000);
      }
    } else {
      this.showCourseMessageGZ = true;
      this.CourseMessageGZ = "'Course Type' Cannot Be Empty";
      setTimeout(() => {
        this.showCourseMessageGZ = false;
        this.CourseMessageGZ = "";
      }, 2000);
    }
  }

  // show Board
  showBoard() {
    this.boardName = this.boardSelection ? this.boardSelection.trim() : "";
  }

  // update board
  updateBoard() {
    let data = this.boardSelection;
    let boardName = this.boardName ? this.boardName.trim() : "";
    if (data) {
      if (boardName) {
        // Update Board XHR

        this.boardName = "";
        this.showBoardUpdateMessage = true;
        this.BoardUpdateMessage = "'Education Board' Updated Successfully";
        setTimeout(() => {
          this.showBoardUpdateMessage = false;
          this.BoardUpdateMessage = "";
        }, 2000);
      } else {
        this.showBoardUpdateMessage = true;
        this.BoardUpdateMessage = "'Education Board' Cannot Be Empty";
        setTimeout(() => {
          this.showBoardUpdateMessage = false;
          this.BoardUpdateMessage = "";
        }, 2000);
      }
    } else {
      this.showBoardUpdateMessage = true;
      this.BoardUpdateMessage = "'Education Board' Must Be Selected";
      setTimeout(() => {
        this.showBoardUpdateMessage = false;
        this.BoardUpdateMessage = "";
      }, 2000);
    }
  }

  // Update Class
  updateClass() {
    let selectBoardForClass = this.selectBoardForClass;
    let selectClassForUpdate = this.selectClassForUpdate;
    let data = this.classValue ? this.classValue.trim() : "";

    if (selectBoardForClass) {
      if (selectClassForUpdate) {
        if (data) {
          // XHR For Update Class

          this.classValue = "";
          this.showClassUpdateMessage = true;
          this.classUpdateMessage = "Success";
          setTimeout(() => {
            this.showClassUpdateMessage = false;
            this.classUpdateMessage = "";
          }, 2000);
        } else {
          this.showClassUpdateMessage = true;
          this.classUpdateMessage = "'Class Name' Cannot Be Empty";
          setTimeout(() => {
            this.showClassUpdateMessage = false;
            this.classUpdateMessage = "";
          }, 2000);
        }
      } else {
        this.showClassUpdateMessage = true;
        this.classUpdateMessage = "'Class' Must Be Selected for updation";
        setTimeout(() => {
          this.showClassUpdateMessage = false;
          this.classUpdateMessage = "";
        }, 2000);
      }
    } else {
      this.showClassUpdateMessage = true;
      this.classUpdateMessage = "'Education Board' Must Be Selected";
      setTimeout(() => {
        this.showClassUpdateMessage = false;
        this.classUpdateMessage = "";
      }, 2000);
    }
  }
  // Show Class
  showClass() {
    this.classValue = this.selectClassForUpdate
      ? this.selectClassForUpdate.trim()
      : "";
  }

  // Update Subject
  updateSubject() {
    let selectBoardForSubject = this.selectBoardForSubject;
    let selectClassForSubject = this.selectClassForSubject;
    let selectSubjectForUpdate = this.selectSubjectForUpdate;
    let subjectValue = this.subjectValue;

    if (selectBoardForSubject) {
      if (selectClassForSubject) {
        if (selectSubjectForUpdate) {
          if (subjectValue) {
            // Update Subject XHR

            this.subjectValue = "";
            this.showSubjectUpdateMessage = true;
            this.subjectUpdateMessage = "Success";
            setTimeout(() => {
              this.showSubjectUpdateMessage = false;
              this.subjectUpdateMessage = "";
            }, 2000);
          } else {
            this.showSubjectUpdateMessage = true;
            this.subjectUpdateMessage = "'Subject Name' Cannot Be Empty";
            setTimeout(() => {
              this.showSubjectUpdateMessage = false;
              this.subjectUpdateMessage = "";
            }, 2000);
          }
        } else {
          this.showSubjectUpdateMessage = true;
          this.subjectUpdateMessage = "'Subject Name' Not Selected";
          setTimeout(() => {
            this.showSubjectUpdateMessage = false;
            this.subjectUpdateMessage = "";
          }, 2000);
        }
      } else {
        this.showSubjectUpdateMessage = true;
        this.subjectUpdateMessage = "'Class Name' Not Selected";
        setTimeout(() => {
          this.showSubjectUpdateMessage = false;
          this.subjectUpdateMessage = "";
        }, 2000);
      }
    } else {
      this.showSubjectUpdateMessage = true;
      this.subjectUpdateMessage = "'Board Name' Not Selected";
      setTimeout(() => {
        this.showSubjectUpdateMessage = false;
        this.subjectUpdateMessage = "";
      }, 2000);
    }
  }

  // Show Subject Name
  showSubject() {
    this.subjectValue = this.selectSubjectForUpdate;
  }

  // Fetch Subjects
  fetchSubject(evt) {
    let selectedBoardName = this.selectBoardForSubject;
    this.filterSubjectList = [];
    this.subjectList.filter((subjectValue) => {
      if (
        subjectValue.board == selectedBoardName &&
        subjectValue.className == this.selectClassForSubject
      ) {
        this.filterSubjectList.push(subjectValue);
      }
    });
  }
}
