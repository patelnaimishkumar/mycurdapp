import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.module';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  gender="M";
  previewphoto:boolean=false
  constructor(private _empService:EmployeeService) { }

  employee:Employee={
    id:null,
    name:null,
    gender:null,
    email:null,
    phno:null,
    contactpref:null,
    dob:null,
    department:null,
    isactive:null,
    photopath:null
  }
  departments:Department[]=[
    {id:6,name:"test"},
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  
  ]


  ngOnInit() {
  }

  saveEmployee(empform:NgForm){
    this._empService.saveEmployee(this.employee);
  }

  previewphotobtn(){

    this.previewphoto=!this.previewphoto;
  }

}
