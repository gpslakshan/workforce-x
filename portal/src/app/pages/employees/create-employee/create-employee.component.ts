import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  states = ['TX', 'CA', 'NY', 'WA', 'OR', 'IL', 'MA'];
  departments = ['Marketing', 'Sales', 'Finance', 'Human Resources', 'Information Technology', 'Operations', 'Software Development', 'Quality Assurance'];
  designations = ['Software Engineer', 'Director', 'HR Manager', 'IT Manager', 'Project Manager', 'QA Engineer', 'Financial Manager', 'Marketing Manager', 'Sales Manager'];


  constructor() { }

  ngOnInit(): void {
  }

}
