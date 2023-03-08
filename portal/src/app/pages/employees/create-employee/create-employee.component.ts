import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  states = ['TX', 'CA', 'NY', 'WA', 'OR', 'IL', 'MA'];
  departments = ['Marketing', 'Sales', 'Finance', 'Human Resources', 'Information Technology', 'Operations', 'Software Development', 'Quality Assurance'];
  designations = ['Software Engineer', 'Director', 'HR Manager', 'IT Manager', 'Project Manager', 'QA Engineer', 'Financial Manager', 'Marketing Manager', 'Sales Manager'];
  createEmployeeForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private empService: EmployeesService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createEmployeeForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      date_of_birth: new FormControl('', [Validators.required]),
      house_no: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postcode: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.createEmployeeForm.valid) {
      console.log("create employee form: ", this.createEmployeeForm.value);
      this.empService.createEmployee(this.createEmployeeForm.value).subscribe(
        res => {
          console.log("Employee created successfully: ", res);
          this._snackBar.open("Employee created successfully", "OK", {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            // panelClass: ['snackbar-fail']
          });
          // this.resetForm();
          // this.submitted = false;
        },
        err => {
          console.log("An unexpected error occured when creating the employee", err);
          this._snackBar.open("An error occured when creating the employee", "OK", {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            // panelClass: ['snackbar-fail']
          });
        }
      );
    }
  }

  resetForm() {
    this.createEmployeeForm.reset();
  }

}
