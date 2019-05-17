import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RecruiterService } from '../Service/service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empformlabel: string = 'Recruiter Login';

  constructor(private formBuilder: FormBuilder, private router: Router, private recruiterService: RecruiterService) {

  }
  loginForm: FormGroup; display = 'none';
  nameList: any; submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      LoginId: ['', [Validators.required]],
      Password: ['', [Validators.required]]

    });

  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onLogin() {
    
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.recruiterService.loginauthenticate(this.loginForm.controls['LoginId'].value, this.loginForm.controls['Password'].value).subscribe(data => {
      
      if (data == "" || data == null) {
        alert("Please check email id and password")
      }
      else {
        alert('successfully login');
        localStorage.setItem('userToken', data.token);
        this.router.navigateByUrl('recruiter/dashboard');
      }
    },
      error => {
        alert(error);
      });
  //  this.router.navigateByUrl('recruiter/dashboard');
  }

  ForgotPassword(EmailID:  string) {
    if  (EmailID  ==  "") {
      alert("please enter ur email id");
    }
    else  {
      // let valid=this.validation.validate(EmailID);
      this.recruiterService.forgotpassword(EmailID).subscribe(data  =>  {
        debugger
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


@Component({
  selector: 'app-login-forgotpassworddialog',
  templateUrl: '../../forgotpassworddialog.html',
})
export class forgotpassworddialog {
  msg: boolean;
  constructor(
    public dialogRef: MatDialogRef<forgotpassworddialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ForgotEmail(emailId: string) {

    if (emailId == "" || emailId == null) {
      alert("enter ur emailid");
      return;
    }
    else {
      alert(emailId);
    }
    // this.msg=this.validemail.isEmail(emailId);
    //alert(this.msg);
  }
}
