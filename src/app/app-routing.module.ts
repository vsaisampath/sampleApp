import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './recruiter/login/login.component';
import { AlumniLoginComponent } from './alumni/login/login.component';
import { AdminLoginComponent } from './admin/login/login.component';

const routes: Routes = [
  //   {path:'', 
  //   component: LayoutComponent, pathMatch: 'full'

  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'recruiter', loadChildren: './recruiter/recruiter.module#RecruiterModule' },
      { path: 'alumni', loadChildren: './alumni/alumni.module#AlumniModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    ]
  },
  // { path: '', component: LayoutComponent, pathMatch: 'full' },
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  // { path: 'recruiter', loadChildren: './recruiter/recruiter.module#RecruiterModule' },
  // { path: 'alumni', loadChildren: './alumni/alumni.module#AlumniModule' },
  { path: 'recruiterlogin', component: LoginComponent },
  { path: 'alumnilogin', component: AlumniLoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
