import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamformserviceService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  deleteForm(examFormId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}deleteExamFormOfUser/${examFormId}`);
  }


  
}
