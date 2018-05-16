import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from '../Models/Subject'

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  url="https://whispering-mountain-30046.herokuapp.com/"

  constructor(private http: HttpClient) { 
    
  }
  
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url+"subjects")
  }


  addSubjects(name: string): Observable<Subject> {
    return this.http.post<Subject>(this.url +"subjects?name="+name,name)
  }

}
