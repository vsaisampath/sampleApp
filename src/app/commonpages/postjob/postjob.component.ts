import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  postJobForm:FormGroup;submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postJobForm = this.formBuilder.group({
      Id: [''],
      jobTitle: ['', [Validators.required]],
      roleFunction: ['', [Validators.required]],
      jobCategory: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      fileName: ['', [Validators.required]],
      salaryRange: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      yearofExp: ['', [Validators.required]],
      division: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      expectedDate: ['', [Validators.required]],
      domestic: ['', [Validators.required]],
      cgpa: ['', [Validators.required]],

  });
  
  }

  // convenience getter for easy access to form fields
get f() { return this.postJobForm.controls; }

onPostJob() {
  debugger;
  this.submitted = true;
  if (this.postJobForm.invalid) {
    return;
}
}

}
