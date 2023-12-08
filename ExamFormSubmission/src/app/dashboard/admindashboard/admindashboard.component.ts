import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { Feedback } from 'src/app/model/Feedback';
import { examform } from 'src/app/model/examform';
import { User } from 'src/app/model/user';
import * as XLSX from 'xlsx';
import { ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { ExamformserviceService } from 'src/app/services/examformservice.service';
import { FaeedbackserviceService } from 'src/app/services/faeedbackservice.service';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private app:AppComponent,private http:HttpClient, private el: ElementRef, public myService:MyserviceService, private exam:ExamformserviceService, private feed:FaeedbackserviceService){
    this.userInfo=myService.getUser();
  }

  userInfo:User=new User();

  
  logout(num:number){
    this.app.isLoginSuccessful=num;
  }

  whatToShow=0;
  downloadExamForm(num:number){
    this.whatToShow=num;
  }

  getExamFormDetails:examform[]=[];
    showExamDetails(){
      this.http.get('http://localhost:8080/'+'downloadExamForm').subscribe(
      (data:any)=>{
        if(data==null)
        window.alert("something went wrong ??");
      else
        this.getExamFormDetails=data;
      }
    );
  }

  show(num:number){
    this.whatToShow=num;
  }

  //Fedback data Fetch Code..................
  getFeedback:Feedback[]=[];
    feedBackGet(){
      this.http.get('http://localhost:8080/'+'showFeedback').subscribe(
      (data:any)=>{
        if(data==null)
        window.alert("something went wrong ??");
      else
        this.getFeedback=data;
      }
    );
  }

  //Register User Information Fetch code................
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

  // Download exam form in Excel Format code............
  fileName='sample.xlsx'
  downloadExamExcel(): void {
    const data = this.getExamFormDetails;
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb,this.fileName)
  }

  downloadRegisterExcel(): void {
    const data = this.getAllRegisteredUser;
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb,this.fileName)
  }

  // *********************************************delete code ******************************************
  // user delete code......
    deleteUserData(userId: number): void {
      this.myService.deleteUsers(userId).subscribe((result) => 
      {
        if (result) {
          this.getAllRegisteredUser = this.getAllRegisteredUser.filter((user) => user.id !== userId);
        } else {
          // Handle deletion failure, show an error message or take appropriate action.
        }
      });
    }

// feedback delete code...............
  deleteUserFeedback(feedbackId: number): void {
    this.feed.deleteFeedback(feedbackId).subscribe((result) => 
    {
      if (result) {
       this.getFeedback = this.getFeedback.filter((feedback) => feedback.id !== feedbackId);
       window.alert("Done");
    } 
    else {
      window.alert("Failed ?");
    }
  });
}

// Exam form delete code........................
deleteUserByExamForm(examFormId: number): void {
  this.exam.deleteForm(examFormId).subscribe(
    (result) => 
    {
    if (result) {
     this.getExamFormDetails = this.getExamFormDetails.filter((examForm) => examForm.id !== examFormId);
     window.alert("Successful !!");
  } 
    else {
      window.alert("Not Successful ?");
    }
  });
}


// exam form verify..................*
markVerifyExamForm(exam: examform) {
  this.myService.updateExamFormStatus(exam.id, 'Verified').subscribe(
    (result) => {
      if (result) {
        const index = this.getExamFormDetails.findIndex((c) => c.id === exam.id);
        if (index !== -1) {
          this.getExamFormDetails.splice(index, 1);
        }
        window.alert('Status Verified Successfully');
      } 
      else {
        window.alert('Status not Verified');
      }
    },
    (error) => {
      console.error('Error updating status:', error);
    }
  );
}

markVerifyExamFormStatusLocally(examId: number, status: string) {
  const exam = this.getExamFormDetails.find((c) => c.id === examId);
  if (exam) {
    console.log(exam);
    exam.status = status;
  }
}


verifiedExamForms: examform[]=[];
ngOnInit(){
  this.getVeriExamForms();
}
getVeriExamForms(){
  this.myService.getVeriExamForms().subscribe(
    data => {
      this.verifiedExamForms = data;
      console.log(this.verifiedExamForms)
    },
    error =>{
      console.log(error);
    }
  )
}


}
