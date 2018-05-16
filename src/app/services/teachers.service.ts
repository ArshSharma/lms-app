import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../Models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  url="https://whispering-mountain-30046.herokuapp.com/"
  constructor(private http: HttpClient) {

  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url+"teachers")
  }
  addTeachers(name: string): Observable<Teacher> {
    return this.http.post<Teacher>(this.url+"teachers?name="+name,name)
  }
}
