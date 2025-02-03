import { HttpClient } from '@angular/common/http';
import { NgModule,Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: false,

  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  constructor(private fb: FormBuilder ,private activeROUTE:ActivatedRoute,private router:Router,private http: HttpClient){}
emploginform!: FormGroup;
empallrecords: any = [];
loading = false;
submitted = false;
sucess?: string
errorMessage?: string
userId : any;
id:any;

ngOnInit() {
  // debugger
  this.emploginform = this.fb.group({
   id: new FormControl(''),
    Name: [''],
    Email:[''],
    Role: [''],
  });

  this.activeROUTE.paramMap.subscribe( paraMap =>{
    debugger
    if(paraMap.get('id') !=null)
    {
      this.id = paraMap.get('id');
      this.editRecord();
    }


  });
}
onSubmit()
{
  debugger
  if(this.id !=null){
    this.http.put("https://localhost:7152/api/employee_details/updateemprecord", this.emploginform.value).subscribe({
      next:(data: any)=>{
        debugger
      this.sucess=data.result;
      this.emploginform.reset();
      this.router.navigate(['/employee']);
       }
     });
  }
    else{

  this.http.post("https://localhost:7152/api/employee_details/employeedetails",this.emploginform.value).subscribe({
    next: (data: any) => {
      this.sucess=data.result;
        if(this.sucess){
          debugger
          this.emploginform.reset();
          this.router.navigate(['/employee']);
        }
    },
    error: err => {
      this.errorMessage = err.error;
      this.loading = false;
    }
  });
}
 this.emploginform.reset();
}

editRecord()
{

  this.http.get("https://localhost:7152/api/employee_details/employeeby_id/"+this.id).subscribe({
    next:(data: any)=>{
      this.empallrecords = data.result;
      // this.emploginform.get('id')?.setValue(data.result.id),
      // this.emploginform.get('Name')?.setValue(data.result.name),
      // this.emploginform.get('Email')?.setValue(data.result.email),
      // this.emploginform.get('Role')?.setValue(data.result.role)
    },
    error: (err) => {
      console.error("API Error: ", err);
    },
  });
}
getallrecord()
{
  debugger


  this.http.get("https://localhost:7152/api/employee_details/employeedetailsRecordsid").subscribe({
    next: (data: any) => {
      debugger

      this.empallrecords = data.result;
    },
  });
}


deleterecord(event: any){
  debugger
  this.userId = event;
  this.http.delete("https://localhost:7152/api/employee_details/DeleteuserId/"+this.userId).subscribe({
    next: (data: any) => {
      this.sucess = "Record deleted successfully";
      this.getallrecord();
    },
    error: (err) => {
      console.error("API Error: ", err);
    },
  })

}
}
