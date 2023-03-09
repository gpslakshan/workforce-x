import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Object> {
    return this.http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  createEmployee(empData: any): Observable<any> {
    return this.http.post(`http://localhost:3000/employees`, empData);
  }

  getAllDepartments(): Observable<any> {
    return this.http.get('http://localhost:3000/departments').pipe(map(
      (responseData) => {
        let departments: any[];
        if (responseData.hasOwnProperty('data')) {
          departments = responseData['data'].map(({ name }: any) => name);
        }
        return departments;
      }
    ));
  }

  getAllDesignations(): Observable<any> {
    return this.http.get('http://localhost:3000/positions').pipe(map(
      (responseData) => {
        let designations: any[];
        if (responseData.hasOwnProperty('data')) {
          designations = responseData['data'].map(({ name }: any) => name);
        }
        return designations;
      }
    ));
  }
}
