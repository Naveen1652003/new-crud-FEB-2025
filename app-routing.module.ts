import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:'',  redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:EmployeeDetailsComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeeid/:id',component:EmployeeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
