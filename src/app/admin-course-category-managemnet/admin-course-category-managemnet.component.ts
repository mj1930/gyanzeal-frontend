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
  public subjectErrorMessage: String = "";

  // Array list
  public boardList = [];
  public classList = [];
  public filterClassList = [];
  constructor(private courseService: CoursesService) {}
  ngOnInit() {
    this.courseService.fetchBoard().subscribe((fetchBoards: any) => {
      if (fetchBoards.status === 200) {
        if (fetchBoards.data.length > 0) {
          fetchBoards.data.forEach((board) => {
            this.boardList.push({
              id: board._id,
              name: board.name
            });
          });
        }
      }
    });
  }

  // Add Board Function
  addBoard() {
    let data = this.educationBoard ? this.educationBoard.trim() : "";
    if (data) {
      this.showBoardError = false;
      // Empty The Box On Success
      this.educationBoard = "";
      this.courseService.addBoard(data).subscribe((courseData: any) => {
        if (courseData.status === 200) {
          this.boardList.push({
              id: courseData._id,
              name: courseData.name
            });
          this.showBoardError = true;
          this.boardErrorMessage = "Success";
        } else {
          this.showBoardError = true;
          this.boardErrorMessage = courseData.message;
        }
      });
    } else {
      this.showBoardError = true;
      this.boardErrorMessage = "Cannot Be Blank";
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
    let board = this.selectedBoard;
    let className = this.className;
    let subjectName = this.subjectName;

    if (board) {
      this.showSubjectError = false;
      // if (className) {
      //   this.showaddClassError = false;
      //   this.classList.push({
      //     board: data,
      //     className,
      //   });
      //   // Empty The Box On Success
      //   this.showaddClassError = true;
      //   this.errorMessage = "Success";
      //   setTimeout(() => {
      //     this.errorMessage = "";
      //   }, 2000);
      //   this.className = "";
      // } else {
      //   this.showaddClassError = true;
      //   this.errorMessage = "Class Name Cannot Be Empty";
      //   setTimeout(() => {
      //     this.showaddClassError = false;
      //     this.errorMessage = "";
      //   }, 2000);
      // }
    } else {
      this.showSubjectError = true;
      this.errorMessage = "Please Select At Least One 'Board Of Education'";
      setTimeout(() => {
        this.showSubjectError = false;
        this.errorMessage = "";
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
    // console.log(this.filterClassList);
  }
}
