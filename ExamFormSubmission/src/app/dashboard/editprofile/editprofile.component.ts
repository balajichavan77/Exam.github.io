import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {

  constructor(private http:HttpClient, private app:AppComponent, public myServi:MyserviceService){
    this.userInfo=myServi.getUser();
  }
  userInfo:User=new User();

  updateUser() {
    this.http.put('http://localhost:8080/'+'updateUser', this.userInfo)
    .subscribe((response) => {
        console.log('User data updated successfully:', response);
        window.alert("SuccessFully updated.");
        console.log(this.userInfo);
        // Optionally, you can handle success and error cases here
    });
  }

}
