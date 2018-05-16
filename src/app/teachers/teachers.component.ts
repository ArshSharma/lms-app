import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Models/Teacher';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  isShowTeachers=false
  ifAddedTeacher=false
  teachersList:Teacher[]

  constructor(private teacherService:TeachersService) { }

  ngOnInit() {
  }

  listAllTeachers(){
    this.teacherService.getTeachers().subscribe((teachers)=>{
      this.teachersList=teachers
      this.isShowTeachers=true
      this.ifAddedTeacher=false
    })
  }

  addTeacher(name:string){
    this.teacherService.addTeachers(name).subscribe((b)=>{  
      this.ifAddedTeacher=true
      this.isShowTeachers=false
    })  
  }

}
