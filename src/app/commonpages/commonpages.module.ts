import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostjobComponent } from './postjob/postjob.component';
import { ListingjobComponent } from './listingjob/listingjob.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { AppliedalumnilistingsComponent } from './appliedalumnilistings/appliedalumnilistings.component';
import { ViewalljobComponent } from './viewalljob/viewalljob.component';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [PostjobComponent, ListingjobComponent, UpdatestatusComponent, AppliedalumnilistingsComponent, ViewalljobComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[PostjobComponent, ListingjobComponent, UpdatestatusComponent, AppliedalumnilistingsComponent, ViewalljobComponent]
})
export class CommonpagesModule { }
