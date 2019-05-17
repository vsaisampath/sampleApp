import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module.module';
import { MatNativeDateModule } from '@angular/material';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LoginComponent } from './recruiter/login/login.component'
import { AlumniLoginComponent } from './alumni/login/login.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { HttpConfigInterceptor } from './interceptor/http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LoginComponent,
    AlumniLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    MatNativeDateModule,
    HttpClientModule,


  ],
  entryComponents: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
