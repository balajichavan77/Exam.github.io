import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutformComponent } from './aboutform/aboutform.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    LoginformComponent,
    RegistrationformComponent,
    AdminloginComponent,
    AboutformComponent,
    FeedbackformComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginformComponent,
    RegistrationformComponent,
    AdminloginComponent,
    AboutformComponent,
    FeedbackformComponent,
    HelpComponent
  ]
})
export class LoginModule { }
