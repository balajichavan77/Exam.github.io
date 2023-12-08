import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';
import { ExamformComponent } from './examform/examform.component';
import { FeedbackformComponent } from '../login/feedbackform/feedbackform.component';
import { LoginModule } from '../login/login.module';
import { SettingComponent } from './setting/setting.component';
import { UsersettingComponent } from './usersetting/usersetting.component';
import { EditprofileComponent } from './editprofile/editprofile.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    UserdashboardComponent,
    ExamformComponent,
    SettingComponent,
    UsersettingComponent,
    EditprofileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
  ],
  exports: [
    AdmindashboardComponent,
    UserdashboardComponent,
    ExamformComponent,
    FeedbackformComponent,
    SettingComponent,
    UsersettingComponent,
    EditprofileComponent,
  ]
})
export class DashboardModule { }
