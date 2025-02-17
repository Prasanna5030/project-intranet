import { NgModule } from "@angular/core";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../shared/shared-material.module";
import { EmployeeComponent } from "./employee/employee.component";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewDetailsEmployeeComponent } from './view-details-employee/view-details-employee.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';




@NgModule({
    declarations:[EmployeeComponent, EditEmployeeComponent, ViewDetailsEmployeeComponent, AddNewEmployeeComponent],
    imports: [
        EmployeesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedMaterialModule,


    ],
    exports:[]
})
export class EmployeesModule{}