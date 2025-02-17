import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { ViewDetailsEmployeeComponent } from "./view-details-employee/view-details-employee.component";
import { AddNewEmployeeComponent } from "./add-new-employee/add-new-employee.component";


const routes:Routes=[
    {path: '', component: EmployeeComponent , children:[
        {path:'edit-employee' , component: EditEmployeeComponent},
        {path:'view-details' , component: ViewDetailsEmployeeComponent},
        {path:'add-new-employee', component: AddNewEmployeeComponent}
    ]}
]

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})
export class EmployeesRoutingModule{}