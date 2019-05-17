import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {AdminLoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActivatejobComponent} from './activatejob/activatejob.component';
import {MailsComponent} from './mails/mails.component';
// import {AppliedalumnilistingsComponent} from '../commonpages/appliedalumnilistings/appliedalumnilistings.component';
// import {ListingjobComponent} from '../commonpages/listingjob/listingjob.component';
// import {PostjobComponent} from '../commonpages/postjob/postjob.component';
// import {UpdatestatusComponent} from '../commonpages/updatestatus/updatestatus.component';

const routes: Routes = [
//  {path:'login', component:AdminLoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'activatejob', component:ActivatejobComponent},
  {path:'mail', component:MailsComponent},
  // {path:'appliedalumnilisting', component:AppliedalumnilistingsComponent},
  // {path:'listingjob', component:ListingjobComponent},
  // {path:'postjob', component:PostjobComponent},
  // {path:'updatestatus', component:UpdatestatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
