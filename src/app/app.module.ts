import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateemployeeComponent } from './employees/createemployee.component';
import {SelectValidator} from './shared/select.validator'
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
const routes:Routes=[
  {path:"createemp",component:CreateemployeeComponent},
  {path:"listemp",component:ListemployeesComponent},
  {path:"**",component:CreateemployeeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateemployeeComponent,
    SelectValidator,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
