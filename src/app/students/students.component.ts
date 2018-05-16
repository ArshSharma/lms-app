import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  isShowStudents=false
  ifAddedStudent=false
  isShowSingleStudent=false
  student:Student
  studentList:Student[]

  constructor(private studentService:StudentsService) { }

  ngOnInit() {
  }

  listAllStudents(){
    this.studentService.getStudents().subscribe((students) => {
      console.log(students)
      this.studentList = students
      this.isShowStudents=true
      this.ifAddedStudent=false
      this.isShowSingleStudent=false
    })}

    addStudents(name:string){
      this.studentService.addStudents(name).subscribe((b)=>{  
      this.isShowStudents=false
      this.ifAddedStudent=true
      this.isShowSingleStudent=false
      })  
    }
    seeStudent(id: number) {
      this.studentService.viewStudent(id).subscribe((b) => {
        
        this.student = b
        console.log(this.student)
        this.isShowSingleStudent=true
        this.isShowStudents=false
        this.ifAddedStudent=false
      })
    }

  }


