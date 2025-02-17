import { NgModule } from "@angular/core";
import { TimesheetComponent } from "./timesheet.component";
import { TimesheetRoutingModule } from "./timesheet-routing.module";
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../shared/shared-material.module";


@NgModule({
    declarations: [TimesheetComponent],
    imports: [
        CommonModule,
        SharedMaterialModule,
        TimesheetRoutingModule
    ],
    exports: []
})
export class TimeSheetModule{}