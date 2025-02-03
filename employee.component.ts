import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: false,

  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private fb: FormBuilder, private http: HttpClient ,private activeROUTE:ActivatedRoute,private router:Router) { }


  public emploginform!: FormGroup; // The ! will take the Null value

  empallrecords: any = [];
  loading = false;
  submitted = false;
  sucess?: string
  errorMessage?: string
  userId : any;
ngOnInit()
{
 this.getallrecord();


}
getallrecord()
{

 this.http.get("https://localhost:7152/api/employee_details/employeedetailsRecordsid").subscribe({
   next: (data: any) => {
    //console.log(data);

     this.empallrecords = data.result;
   },
 });
}



deleterecord(event: any){

 this.userId = event;
 this.http.delete("https://localhost:7152/api/employee_details/DeleteuserId/"+this.userId).subscribe({
   next: (data: any) => {
     debugger
     this.sucess = "Record deleted successfully";
   },
   error: (err) => {
     console.error("API Error: ", err);
   },
 });
 window.location.reload();
}
}
