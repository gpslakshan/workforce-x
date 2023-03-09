import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


}
