import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RecruiterRoutingModule } from './recruiter-routing.module';
//import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MaterialModuleModule} from '../material-module.module';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppliedalumnilistingsComponent} from '../commonpages/appliedalumnilistings/appliedalumnilistings.component';
import {ListingjobComponent} from '../commonpages/listingjob/listingjob.component';
import {PostjobComponent} from '../commonpages/postjob/postjob.component';
import {UpdatestatusComponent} from '../commonpages/updatestatus/updatestatus.component';
import{ViewalljobComponent} from '../commonpages/viewalljob/viewalljob.component';
//import {ValidationComponent} from '../validations/validation';


@NgModule({
  declarations: [ RegistrationComponent, RecruiterHomeComponent, DashboardComponent,AppliedalumnilistingsComponent,
    ListingjobComponent,PostjobComponent,UpdatestatusComponent,ViewalljobComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    MaterialModuleModule,ReactiveFormsModule
  
  ],
   entryComponents:[RegistrationComponent,AppliedalumnilistingsComponent],
schemas: [
CUSTOM_ELEMENTS_SCHEMA,
NO_ERRORS_SCHEMA
] 

})
export class RecruiterModule { }
