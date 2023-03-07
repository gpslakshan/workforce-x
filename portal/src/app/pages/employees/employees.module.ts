import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { EmployeesComponent } from "./employees.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

@NgModule({
    declarations: [
        EmployeesComponent,
        ViewEmployeeComponent,
        EditEmployeeComponent,
        CreateEmployeeComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatIconModule,
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        EmployeesRoutingModule
    ],
})
export class EmployeesModule {

}