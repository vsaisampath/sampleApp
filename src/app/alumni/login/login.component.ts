import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AlumniService} from '../Service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AlumniService]
})
export class AlumniLoginComponent implements OnInit {
  empformlabel: string = 'Alumni Login';  

  constructor(private formBuilder: FormBuilder,private router: Router, private alumniService: AlumniService) {
    
  }
 loginForm: FormGroup; display = 'none';
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      LoginId: ['', [Validators.required]],
      Password: ['', [Validators.required]]

  });
  
  }
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


onLogin() {
  debugger;
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
}
  this.alumniService.loginauthenticate(this.loginForm.controls['LoginId'].value,this.loginForm.controls['Password'].value).subscribe( data => {
    debugger;
  
      alert('successfully login');
     // localStorage.setItem('userToken',data.token);
      this.router.navigateByUrl('alumni/dashboard'); 
    
  },  
  error => {  
    alert(error);  
  });  
}

ForgotPassword(EmailID:  string) {
  if  (EmailID  ==  "") {
    alert("please enter ur email id");
  }
  else  {
    // let valid=this.validation.validate(EmailID);
    this.alumniService.forgotpassword(EmailID).subscribe(data  =>  {
      
      console.log(data);
      alert('Password has been sent to your Email..!');
      this.onCloseHandled();
    },
      err  =>  console.log(err));
  }
}

openDialog() {
  this.display = 'block';
}

onCloseHandled() {
  this.display = 'none';
}


}

