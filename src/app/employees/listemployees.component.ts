import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
  constructor(private _empService:EmployeeService) { }

  private arrayIndex=1;
  employees:Employee[];
  employeeToDisplay:Employee;
  empFromchild:Employee;
  ngOnInit() {
    this.employees=this._empService.getAllEmploye();
    this.employeeToDisplay=this.employees[0];
  }
  
    
  nextEmp(){
if(this.arrayIndex<=2){
this.employeeToDisplay=this.employees[this.arrayIndex];
this.arrayIndex++;
  }else {
    this.employeeToDisplay=this.employees[0];
this.arrayIndex=1;
  }
}

setName(emp:Employee){
  this.empFromchild=emp;

}
}
