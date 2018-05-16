import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../Models/Course';
import { Batch } from '../Models/Batch';
import { Student } from '../Models/Student';
import { Lecture } from '../Models/Lecture';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  ifAddedBatch = false
  ifAddedCourse = false
  ifAddedLecture = false
  ifAddedStudent = false

  isShowBatches = false
  isShowCourses = false
  isShowStudents = false
  isShowLectures = false

  getBatchDiv = false
  getLectureDiv = false
  getStudentDiv = false

  selectedCourse = 0
  selectedBatch = 0

  coursesList: Course[]
  batchList: Batch[]
  lectureList: Lecture[]
  studentList: Student[]


  constructor(private courseService: CoursesService) {
    this.coursesList = []
    this.batchList = []
    this.lectureList = []
  }

  ngOnInit() {

  }

  selected(id: number) {
    this.selectedCourse = id
    this.getBatchDiv = true
    this.getLectureDiv = false
    this.getStudentDiv = false
    this.ifAddedCourse = false
    this.ifAddedBatch = false
    this.ifAddedLecture = false
    this.ifAddedStudent = false
    this.isShowBatches = false
    this.isShowCourses = false
    this.isShowLectures = false
    this.isShowStudents = false
  }

  addLecture(id: number) {
    this.selectedBatch = id
    this.getLectureDiv = true
    this.getBatchDiv = false
    this.getStudentDiv = false
    this.ifAddedCourse = false
    this.ifAddedBatch = false
    this.ifAddedLecture = false
    this.ifAddedStudent = false
    this.isShowBatches = false
    this.isShowCourses = false
    this.isShowLectures = false
    this.isShowStudents = false
  }

  addStudent(id: number) {
    this.selectedBatch = id
    this.getStudentDiv = true
    this.getBatchDiv = false
    this.getLectureDiv = false

    this.ifAddedCourse = false
    this.ifAddedBatch = false
    this.ifAddedLecture = false
    this.ifAddedStudent = false
    this.isShowBatches = false
    this.isShowCourses = false
    this.isShowLectures = false
    this.isShowStudents = false
  }

  addStudentTo(name: string) {
    this.courseService.addStudent(name, this.selectedCourse, this.selectedBatch).subscribe(() => {

      this.ifAddedStudent = true
      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false
      this.ifAddedLecture = false

      this.isShowBatches = false
      this.isShowCourses = false
      this.isShowLectures = false
      this.isShowStudents = false
    })
  }


  addBatchTo(name: string) {
    this.courseService.addbatch(name, this.selectedCourse).subscribe(() => {

      this.ifAddedBatch = true

      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false

      this.ifAddedLecture = false
      this.ifAddedStudent = false
      this.isShowBatches = false
      this.isShowCourses = false
      this.isShowLectures = false
      this.isShowStudents = false

    })
  }
  addLectureTo(name: string) {
    this.courseService.addLecture(name, this.selectedCourse, this.selectedBatch).subscribe(() => {

      this.ifAddedLecture = true

      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false

      this.ifAddedStudent = false
      this.isShowBatches = false
      this.isShowCourses = false
      this.isShowLectures = false
      this.isShowStudents = false

    })
  }


  seeBatch(id: number) {
    this.courseService.viewbatch(id).subscribe((b) => {
      this.selectedCourse = id
      this.batchList = b
      this.isShowBatches = true

      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false
      this.ifAddedLecture = false
      this.ifAddedStudent = false

      this.isShowCourses = false
      this.isShowLectures = false
      this.isShowStudents = false
    })
  }

  seeLecture(id: number) {
    this.courseService.viewLecture(this.selectedCourse, id).subscribe((b) => {
      this.lectureList = b
      this.isShowLectures = true
      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false
      this.ifAddedLecture = false
      this.ifAddedStudent = false
      this.isShowBatches = false
      this.isShowCourses = false

      this.isShowStudents = false
    })
  }

  seeStudent(id: number) {
    this.courseService.viewStudent(this.selectedCourse, id).subscribe((b) => {
      this.studentList = b
      this.isShowStudents = true
      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false
      this.ifAddedLecture = false
      this.ifAddedStudent = false
      this.isShowBatches = false
      this.isShowCourses = false
      this.isShowLectures = false

    })
  }


  addCourses(name: string) {
    this.courseService.addCourses(name).subscribe((b) => {
      this.ifAddedCourse = true
      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false

      this.ifAddedBatch = false
      this.ifAddedLecture = false
      this.ifAddedStudent = false
      this.isShowBatches = false
      this.isShowCourses = false
      this.isShowLectures = false
      this.isShowStudents = false
    })

  }

  listAllCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      console.log(courses)
      this.coursesList = courses
      this.isShowCourses = true
      this.getBatchDiv = false
      this.getLectureDiv = false
      this.getStudentDiv = false
      this.ifAddedCourse = false
      this.ifAddedBatch = false
      this.ifAddedLecture = false
      this.ifAddedStudent = false
      this.isShowBatches = false

      this.isShowLectures = false
      this.isShowStudents = false
    })
  }



}
