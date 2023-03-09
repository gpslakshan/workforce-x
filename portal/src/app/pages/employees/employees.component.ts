import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from './employees.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  displayedColumns: string[] = ['emp_id', 'first_name', 'last_name', 'date_of_birth', 'email', 'department', 'position', 'salary', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private empService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
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

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe({
      next: (res) => {
        console.log("Employee deleted.", res);
        this._snackBar.open("Employee Deleted successfully", "OK", {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
        this.getEmployees();
      },
      error: (err) => {
        console.log(err);
        this._snackBar.open("An error occured while deleting the employee", "OK", {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    });
  }

  navigateToCreateEmployee() {
    this.router.navigate(['create-employee'], { relativeTo: this.route });
  }

  navigateToViewEmployee(id: number) {
    this.router.navigate([`view-employee/${id}`], { relativeTo: this.route });
  }

  navigateToEditEmployee(id: number) {
    this.router.navigate([`edit-employee/${id}`], { relativeTo: this.route });
  }

}
