import { Component, OnInit } from '@angular/core';
import {Router, Route} from "@angular/router";
import{AppliedalumnilistingsComponent} from '../commonpages/appliedalumnilistings/appliedalumnilistings.component'


@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
  title:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.title = 'JobPortal';
  }
  logout(){
    //localStorage.getItem('userToken');
    localStorage.removeItem('userToken');
   // this.router.navigateByUrl('admin/login'); 
   this.router.navigateByUrl('/recruiterlogin'); 
  }
}