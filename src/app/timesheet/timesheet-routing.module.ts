import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TimesheetComponent } from "./timesheet.component";


const routes :Route[] = [
    {path : '' ,component : TimesheetComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class TimesheetRoutingModule{}