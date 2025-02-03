import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import {  provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeComponent
  ],
  providers:
  [provideHttpClient()],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,

  ],
  bootstrap: [AppComponent],
  exports:[FormsModule,ReactiveFormsModule]
})
export class AppModule { }
