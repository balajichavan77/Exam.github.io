import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import * as XLSX from 'xlsx';
import { User } from 'src/app/model/user';
import { MyserviceService } from 'src/app/services/myservice.service';
import { examform } from 'src/app/model/examform';
import { ExamformserviceService } from 'src/app/services/examformservice.service';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';





@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  constructor(private app:AppComponent, private http:HttpClient, public myServi:MyserviceService, private examSer:ExamformserviceService){
    this.userInfo=myServi.getUser();
  }

  userInfo:User=new User();

  logout(num:number){
    this.app.isLoginSuccessful=num;
  }

  //Register User Information Fetch code
  getAllRegisteredUser:User[]=[];
    registerInfo(){
      this.http.get('http://localhost:8080/'+'getAllregisteredUser').subscribe(
      (data:any)=>{
        if(data==null)
        window.alert("something went wrong ??");
      else
        this.getAllRegisteredUser=data;
      }
    );
  }

  //Exam form selector code 
  whatToShow=0;
  examFormShow(num:number){
    this.whatToShow=num;
  }

  show(num:number){
    this.whatToShow=num; 
  }

  // download excel file code 
  fileName = 'sample.xlsx';
  downloadExamExcel(examId: number): void {
  const data = this.myServi.ExamForms.filter(exam => exam.id === examId);
  if (data.length === 0) {
    console.log('Exam not found');
    return;
  }
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, this.fileName);
}

  
 
  // *********************************************delete code ******************************************
    deleteUserData(userId: number): void {
      this.myServi.deleteUsers(userId).subscribe((result) => 
      {
        if (result) {
          // Successfully deleted complaint from the backend, now remove it from the local array.
          this.getAllRegisteredUser = this.getAllRegisteredUser.filter((user) => user.id !== userId);
        } else {
          // Handle deletion failure, show an error message or take appropriate action.
        }
      });
    }


// ************************************Update profile  code ********************************************** 
    userToUpdate = {
      id:"",
      name:"",
      address:"",
      email:"",
      contact:"",
      username:"",
      password:""
    };
  
    edit(user){
      this.userToUpdate=user;
    }
  
    saveChanges(){
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      this.http.put('http://localhost:8080/updateUser',this.userToUpdate,{ headers }).subscribe(
        (response) =>{
          window.alert("successful");
        },
        (error) =>{
          window.alert("not successful try again ?");
        }
      );
    }


    // ExamForm Verify code........
    markVerifyExamForm(exam:examform){
      this.myServi.updateExamFormStatus(exam.id, 'Verified').subscribe((result) => {
        if(result){
          exam.status = 'Verified';
        }
        else{
          window.alert("status not verified");
        }
      })
    }
    

    

}