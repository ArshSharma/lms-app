import { Component, OnInit } from '@angular/core';
import { Subject } from '../Models/Subject';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  isShowSubjects=false
  subjectList:Subject[]
  ifAddedSubject=false

  constructor(private subjectService:SubjectsService) { }

  ngOnInit() {
  }

  listAllSubjects(){
    this.subjectService.getSubjects().subscribe((subjects) => {
      console.log(subjects)
      this.subjectList = subjects
      this.isShowSubjects=true
      this.ifAddedSubject=false
    })
  }


  addSubjects(name:string){
    this.subjectService.addSubjects(name).subscribe((b)=>{  
      this.ifAddedSubject=true
      this.isShowSubjects=false
    })  
  }

}
