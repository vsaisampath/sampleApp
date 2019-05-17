import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniRoutingModule } from './alumni-routing.module';
//import { AlumniLoginComponent } from './login/login.component';
import{forgotpassworddialog} from './login/forgotpassworddialog'
import {MaterialModuleModule} from '../material-module.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { StatusComponent } from './status/status.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
// import{AppliedalumnilistingsComponent} from '../commonpages/appliedalumnilistings/appliedalumnilistings.component';
// import {ListingjobComponent} from '../commonpages/listingjob/listingjob.component';
// import {PostjobComponent} from '../commonpages/postjob/postjob.component';
// import {UpdatestatusComponent} from '../commonpages/updatestatus/updatestatus.component';
// import{ViewalljobComponent} from '../commonpages/viewalljob/viewalljob.component';

@NgModule({
  declarations: [forgotpassworddialog, DashboardComponent, ApplyjobComponent, StatusComponent, ViewprofileComponent,
    //AppliedalumnilistingsComponent,ListingjobComponent,PostjobComponent,UpdatestatusComponent,ViewalljobComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    MaterialModuleModule,ReactiveFormsModule
  ],
  entryComponents:[forgotpassworddialog],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
  ] 
})
export class AlumniModule { }
