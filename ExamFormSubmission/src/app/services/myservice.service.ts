import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { examform } from '../model/examform';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  
  deleteUsers(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}deleteUser/${userId}`);
  }


  public updateUser(user){
    return this.http.put(this.apiUrl + '/updateUser', user);
  }


  // get Username 
  loggedInUser:User=new User();

  ExamForms:examform []=[];

  setUser(user){
    this.loggedInUser=user;
  }

  getUser(){
    return this.loggedInUser;
  }



  // ******************************************************
  // verifiedExamForms: examform[] = [];

  updateExamFormStatus(examId:number, status:string): Observable<string>{
    return this.http.put(`${this.apiUrl}apiUrl/verifyExamForm/${examId}/status`, status, { responseType: 'text' });
  }

  getVeriExamForms(): Observable<examform[]> {
    return this.http.get<examform[]>(this.apiUrl + 'api/eaxm/verified');
  }



}
