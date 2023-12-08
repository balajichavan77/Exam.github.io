import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  constructor(private app:AppComponent, public myServi:MyserviceService, private http:HttpClient){
    this.userInfo=myServi.getUser();
  }
  userInfo:User=new User();

  
  logout(num:number){
    this.app.isLoginSuccessful=num;
  }

}
