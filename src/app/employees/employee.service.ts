import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService{
    employees:Employee[]=[{id:1,
        name:"a",
      gender:"M",
      email:"a@",
      phno:122334,
      contactpref:"email",
      dob:new Date("10/25/1985"),
      department:"1",
      isactive:true,
      photopath:"assets/test1.png"},
      {id:2,
        name:"b",
      gender:"F",
      email:"b@",
      phno:122334,
      contactpref:"email",
      dob:new Date("10/25/1985"),
      department:"3",
      isactive:true,
      photopath:"assets/test1.png"}
      ]
      
    getAllEmploye():Employee[]{
return this.employees;
    }

saveEmployee(emp:Employee){ 
      this.employees.push(emp);

}

}