import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Feedback } from 'src/app/model/Feedback';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {

  url:string='http://localhost:8080/';

  constructor(private http:HttpClient){}

  mesSend:Feedback=new Feedback();

  messageSend(){
    if(this.mesSend.fullName==undefined)
      window.alert("please enter your name ??");
    else if(this.mesSend.emailId==undefined)
      window.alert("please enter your valid email ??");
    else if(this.mesSend.mobileNo==undefined)
      window.alert("please enter your mobile number ??");
    else if(this.mesSend.queryMessage==undefined)
      window.alert("please enter your query ??");
    else{
      this.http.post('http://localhost:8080/feedback',this.mesSend).subscribe(
        (data:any)=>{
         console.log(data);
          if(data==false)
          window.alert("message cannot send ? try again !!");
        else
          window.alert("Message send Successful !!");
          this.mesSend=new Feedback();
        }
      );
    }
  }

  // ********************* validations *******************************
  validateName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validatePhoneNumber(event: any) {
    const input = event.target.value;
    if (!/^\d*$/.test(input)) {
      event.target.value = input.replace(/\D/g, '');
    }
  }

  validateAddress(event: any) {
    const input = event.target.value;
    if(!/^[a-zA-Z\s]*$/.test(input)){
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

}