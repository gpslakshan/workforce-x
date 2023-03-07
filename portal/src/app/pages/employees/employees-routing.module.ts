import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeesComponent } from "./employees.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

const routes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: 'create-employee', component: CreateEmployeeComponent },
    { path: 'view-employee/:id', component: ViewEmployeeComponent },
    { path: 'edit-employee/:id', component: EditEmployeeComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule {

}