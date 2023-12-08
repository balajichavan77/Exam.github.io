import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  showPassword = false;
  PasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private service:MyserviceService, private app:AppComponent, private http:HttpClient){}


  UIusername:string;
  UIpassword:string;

  adminlogin(){
    if(this.UIusername==undefined)
      window.alert("please enter your username ?");
    else if(this.UIpassword==undefined)
      window.alert("please enter your password ?");
    else{
      this.http.get('http://localhost:8080/'+'login'+this.UIusername+'and'+this.UIpassword).subscribe(
        (data:any)=>{
          if(data==-1)
            window.alert("Login Un-Successful ??");
          else 
          this.http.get('http://localhost:8080/'+'getLoginUser'+this.UIusername+'and'+this.UIpassword).subscribe(
            (user:any)=>{
              this.service.setUser(user);
              this.app.isLoginSuccessful=data;
              this.app.isLoginSuccessful=user.userRole;   // assign value to open dashboard
              }
          );                    
        }
      );
    }
  }
}
