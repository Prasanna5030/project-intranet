import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DocumentsModule } from '../documents/documents.module';
import { ActionCenterModule } from '../actions/action-center.module';
import { AssetManagementModule } from '../asset-management/asset-management.module';
import { EmployeesModule } from '../employees/employees.module';
import { ActionCenterComponent } from '../actions/action-center/action-center.component';
import { AssetManagementComponent } from '../asset-management/asset-management/asset-management.component';
import { EmployeeComponent } from '../employees/employee/employee.component';
import { HrPoliciesComponent } from '../menu/hr-policies/hr-policies.component';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { HrPoliciesModule } from '../menu/hr-policies/hr-policies.module';
import { FormModule } from '../forms/form.module';
import { UpcomingEventsModule } from '../upcoming-events/upcoming-events.module';
import { HolidayCalendarModule } from '../holiday-calendar/holiday-calendar.module';
import { TimeSheetModule } from '../timesheet/timesheet.module';

@NgModule({
  declarations: [DashboardComponent
  ],
  imports: [
    CommonModule, 
    SharedMaterialModule,
    DashboardRoutingModule,


    //feature modules 
    ActionCenterModule, 
    AssetManagementModule,
    EmployeesModule,
    DocumentsModule,
    UpcomingEventsModule,
    HolidayCalendarModule,
    HrPoliciesModule,
    FormModule,
    TimeSheetModule
    
  ],
    exports: [],
})
export class DashboardModule {}
