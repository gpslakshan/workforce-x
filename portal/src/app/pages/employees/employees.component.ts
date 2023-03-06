import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from './employees.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  displayedColumns: string[] = ['emp_id', 'first_name', 'last_name', 'date_of_birth', 'email', 'mobile', 'department', 'position', 'salary', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res) => {
        console.log("Employees fetched from the API", res);
        this.dataSource = new MatTableDataSource(res['data']);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log("An error occured while fetching employees", err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
