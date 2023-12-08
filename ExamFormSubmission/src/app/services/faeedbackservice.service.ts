import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/Feedback';


@Injectable({
  providedIn: 'root'
})
export class FaeedbackserviceService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  deleteFeedback(feedbackId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}deleteFeedback/${feedbackId}`);
  }

  
}
