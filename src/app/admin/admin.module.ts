import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModuleModule} from '../material-module.module';
import { AdminRoutingModule } from './admin-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailsComponent } from './mails/mails.component';
import { ActivatejobComponent } from './activatejob/activatejob.component';
// import {AppliedalumnilistingsComponent} from '../commonpages/appliedalumnilistings/appliedalumnilistings.component';
// import {ListingjobComponent} from '../commonpages/listingjob/listingjob.component';
// import {PostjobComponent} from '../commonpages/postjob/postjob.component';
// import {UpdatestatusComponent} from '../commonpages/updatestatus/updatestatus.component';
// import{ViewalljobComponent} from '../commonpages/viewalljob/viewalljob.component';

@NgModule({
  declarations: [ DashboardComponent, MailsComponent, ActivatejobComponent,
  //  ListingjobComponent,PostjobComponent,UpdatestatusComponent,AppliedalumnilistingsComponent,ViewalljobComponent
],
  imports: [
    CommonModule,
    AdminRoutingModule,MaterialModuleModule,ReactiveFormsModule
  ],
  entryComponents:[DashboardComponent],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
  ] 
})
export class AdminModule { }
