import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';
import { Batch } from '../Models/Batch'
import { Lecture } from '../Models/Lecture';
import { Student } from '../Models/Student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url="https://whispering-mountain-30046.herokuapp.com/"
  constructor(private http: HttpClient) {

  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url+"courses")
  }

  addCourses(name: string): Observable<Course> {
    return this.http.post<Course>(this.url+"courses?name=" + name, name)
  }

  addbatch(name: string, id: number) {
    return this.http.post<Batch>(this.url+"courses/" + id + "/batches?name=" + name, httpOptions)
  }

  viewbatch(id: number) {

    return this.http.get<Batch[]>(this.url+"courses/" + id + "/batches", httpOptions)
  }

  viewLecture(selectedCourse:number,id: number) {

    return this.http.get<Lecture[]>(this.url+"courses/" + selectedCourse + "/batches/"+id + "/lectures",httpOptions)
  }

  addLecture(name: string,selectedCourse:number, id: number) {
    return this.http.post<Batch>(this.url+"courses/"+selectedCourse+"/batches/" + id + "/lectures?name=" + name, httpOptions)
  }

  addStudent(name: string,selectedCourse:number, id: number) {
    return this.http.post<Batch>(this.url+"courses/"+selectedCourse+"/batches/" + id + "/students?name=" + name, httpOptions)
  }

  viewStudent(selectedCourse:number,id: number) {

    return this.http.get<Student[]>(this.url+"courses/" + selectedCourse + "/batches/"+id + "/students",httpOptions)
  }

}
