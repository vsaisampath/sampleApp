import { Component,Inject, OnInit,Input} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import { ValidationComponent } from '../../validations/validation';
import { Router} from "@angular/router";
import {AdminService} from '../Service/service'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
  empformlabel: string = 'Admin Login';  

  constructor(private formBuilder: FormBuilder,private router: Router, private adminService: AdminService) {
    
  }
 loginForm: FormGroup; display = 'none';
 nameList: any;   submitted = false;

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
  this.adminService.loginauthenticate(this.loginForm.controls['LoginId'].value,this.loginForm.controls['Password'].value).subscribe( data => {
    debugger;
    if(data == "" || data == null)
    {
      alert("Please check email id and password")
    }
    else{
      alert('successfully login');
     // localStorage.setItem('userToken',data.token);
      this.router.navigateByUrl('admin/dashboard'); 
    }
  },  
  error => {  
    alert(error);  
  });  
  //this.router.navigateByUrl('admin/dashboard'); 
}

ForgotPassword(EmailID:  string) {
  if  (EmailID  ==  "") {
    alert("please enter ur email id");
  }
  else  {
    // let valid=this.validation.validate(EmailID);
    this.adminService.forgotpassword(EmailID).subscribe(data  =>  {
      
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

