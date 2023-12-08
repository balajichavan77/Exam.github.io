import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { examform } from 'src/app/model/examform';
import { User } from 'src/app/model/user';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent {

  constructor(private http:HttpClient, private app:AppComponent, private mySer:MyserviceService){
    this.myUser=this.mySer.getUser();
  }

  myUser:User = new User();
  
  exam:examform=new examform();

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Add a leading zero if needed
    const day = today.getDate().toString().padStart(2, '0'); // Add a leading zero if needed
    this.exam.monthAndYearDate = `${year}-${month}-${day}`;
  }

  examFormSubmit(){
    if(!this.exam.year)
      window.alert("enter year ??");
    else if(!this.exam.firstName)
      window.alert("enter your first name ??");
    else if(!this.exam.middleName)
      window.alert("enter your middle name ??");
    else if(!this.exam.lastName)
      window.alert("enter your last name ??");
    else if(!this.exam.motherName)
      window.alert("enter your mother name ??");
    else if(!this.exam.dateOfBirth)
      window.alert("enter your date of birth ??");
    else if(!this.exam.gender)
      window.alert("enter gender ??");
    else if(!this.exam.emailOfStud)
      window.alert("enter your email Id ??");
    else if(!this.exam.phoneNumber)
      window.alert("enter your phone number ??");
    else if(!this.exam.addressOfStud)
      window.alert("enter your address ??");
    else if(!this.exam.caste)
      window.alert("enter your categary ??");
    else if(!this.exam.nameOfExam)
      window.alert("enter your exam name S/W ??");
    else if(!this.exam.seatNumber)
      window.alert("enter your seat number ??");
    else if(!this.exam.monthAndYearDate)
      window.alert("enter your exam form submission date ??");
    else if(!this.exam.collegeName)
      window.alert("enter your college name ??");
    else if(!this.exam.universityName)
      window.alert("enter your university name ??");
    else if(!this.exam.resultOfStud)
      window.alert("enter your last sem result P/F ??");
    else if(!this.exam.courseName)
      window.alert("enter your course name ??");
    else if(!this.exam.selectYear)
      window.alert("enter your year of graduation ??");
    else if(!this.exam.selectSemester)
      window.alert("enter your current semester ??");
    else if(!this.exam.regSubOne)
      window.alert("enter your regular sub-1");
    else if(!this.exam.regSubTwo)
      window.alert("enter your regular sub-2");
    else if(!this.exam.regSubThree)
      window.alert("enter your regular sub-3");
    else if(!this.exam.regSubFour)
      window.alert("enter your regular sub-4");
    else if(!this.exam.regSubFive)
      window.alert("enter your regular sub-5");
    else if(!this.exam.regSubSix)
      window.alert("enter your regular sub-6");
    else if(!this.exam.backSubOne)
      window.alert("enter your back-log sub-1");
    else if(!this.exam.backSubTwo)
      window.alert("enter your back-log sub-2");
    else if(!this.exam.backSubThree)
      window.alert("enter your back-log sub-3");
    else if(!this.exam.backSubFour)
      window.alert("enter your back-log sub-4");
    else if(!this.exam.backSubFive)
      window.alert("enter your back-log sub-5");
    else if(!this.exam.backSubSix)
      window.alert("enter your back-log sub-6");
    else{
      this.exam.emailOfStud=this.mySer.getUser().email;
       this.http.post('http://localhost:8080/examFormOfStud'+this.myUser.id,this.exam).subscribe(
        (data:any)=>{
          console.log(this.exam);
          if(data==false)
          window.alert("Exam Form Not Submited ??");
        else
          window.alert("Exam form Submit Successful !!");
          this.exam=new examform();
        }
      );
    }
  }

  // ******************** validations *************************
  validateYear(event: any) {
    const input = event.target.value;
    if (!/^\d*$/.test(input)) {
      event.target.value = input.replace(/\D/g, '');
    }
  }

  validateFirstName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateMiddleName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateLastName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateMotherName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validatePhone(event: any) {
    const input = event.target.value;
    if (!/^\d*$/.test(input)) {
      event.target.value = input.replace(/\D/g, '');
    }
  }

  validateCollegeName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateUniversityName(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateRegularSub(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateBacklogSub(event: any) {
    const input = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }
  

}

