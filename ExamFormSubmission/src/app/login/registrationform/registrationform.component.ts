import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {

  formErrors: any = {}; // To store form field errors

  url:string='http://localhost:8080/';

  constructor(private http:HttpClient, private app:AppComponent){
  }
 
  registerUser:User=new User();

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Add a leading zero if needed
    const day = today.getDate().toString().padStart(2, '0'); // Add a leading zero if needed
    const hour = today.getHours().toString().padStart(2, '0');
    const minute = today.getMinutes().toString().padStart(2, '0');
    this.registerUser.registrationDate = `${year}-${month}-${day}T${hour}:${minute}`;
  }



  userRegister(){
    this.formErrors = {};
  if (!/^[a-zA-Z\s]+$/.test(this.registerUser.name)) {
      this.formErrors.name = "Name can only contain letters";
}

  if (!this.registerUser.address) {
  this.formErrors.address = "Enter a valid address";
}

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.registerUser.email)) {
      this.formErrors.email = "Enter a valid email address";
}
  if(!this.registerUser.username){
    this.formErrors.username = "enter valid username"
  }
    
  if (!/(?=.*[!@#$%^&*()_+])[A-Z]/.test(this.registerUser.password)) {
      this.formErrors.password = "please enter strong password ?";
}

 if (!/^\d{10}$/.test(this.registerUser.contact)) {
      this.formErrors.contact = "Phone number should be 10 digits";
}

  if(!this.registerUser.className){
    this.formErrors.className = "select your class name";
  }
    

  if (!this.registerUser.city) {
      this.formErrors.city = "Enter your city";
}

  if (!this.registerUser.registrationDate) {
      this.formErrors.registrationDate = "Enter current registration date";
    }

// ********************* register Code ***********************
const hasErrors = Object.keys(this.formErrors).length>0;
  if(!hasErrors){
    this.http.post('http://localhost:8080/register',this.registerUser).subscribe(
      (data:any)=>{
       console.log(data);
        if(data==false)
        window.alert("Registration Un-Successful ??");
      else
        window.alert("Registration Successful !!");
        this.registerUser=new User();
      }
    );
  }
}

// ***************************************** validations ****************************************************
validatePhoneNumber(event: any) {
  const input = event.target.value;
  if (!/^\d*$/.test(input)) {
    // If input contains non-numeric characters, remove them
    event.target.value = input.replace(/\D/g, '');
  }
}

validateName(event: any) {
  const input = event.target.value;
  if (!/^[a-zA-Z\s]*$/.test(input)) {
    // If input contains non-letter characters, remove them
    event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
  }
}

validateAddress(event: any) {
  const input = event.target.value;
  if(!/^[a-zA-Z\s]*$/.test(input)){
    event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
  }
}

validateCity(event: any) {
  const input = event.target.value;
  if(!/^[a-zA-Z\s]*$/.test(input)){
    event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
  }
}


// ************************ confirm password match or not *******************************
  errorMsg:string="";
  isErrorShow:number=0;
  confirmMyPassword(event:any){
    let confirmPassword=event.target.value;
    if(confirmPassword==this.registerUser.password){
      this.errorMsg="password match !!";
      this.isErrorShow=1;
    }
    else{
      this.errorMsg="password not match ??";
      this.isErrorShow=2;
    }
  }

  whatToShow=0;
  login(num:number){
    this.whatToShow=num;
  }


}
