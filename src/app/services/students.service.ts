import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url="https://whispering-mountain-30046.herokuapp.com/"
  constructor(private http: HttpClient) {

  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url+"students")
  }

  addStudents(name: string): Observable<Student> {
    return this.http.post<Student>(this.url+"students?name=" + name, name)
  }
  viewStudent(id: number) {

    return this.http.get<Student>(this.url+"students/" + id  )
  }
}
