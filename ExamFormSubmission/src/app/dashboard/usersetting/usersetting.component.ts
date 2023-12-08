import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user';
import { MyserviceService } from 'src/app/services/myservice.service';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.css']
})
export class UsersettingComponent {

  isDarkMode: boolean;


  constructor(private app:AppComponent, public myServi:MyserviceService, private http:HttpClient, public theme:ThemeServiceService){
    this.userInfo=myServi.getUser();
    this.isDarkMode = this.theme.currentTheme === 'dark';
  }
  userInfo:User=new User();

  
  logout(num:number){
    this.app.isLoginSuccessful=num;
  }

  toggleTheme() {
    this.theme.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }

}
