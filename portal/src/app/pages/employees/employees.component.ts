import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees = []

  constructor(
    private http: HttpClient,
    private empService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("An error occured while fetching employees", err);
      }
    });
  }

}
