import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit,OnChanges {

  @Input() employee:Employee;

  @Output() notify:EventEmitter<Employee>=new EventEmitter<Employee>()

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);

  }

  onclick(){
    console.log("onclick...");
    this.notify.emit(this.employee);
  }

}
