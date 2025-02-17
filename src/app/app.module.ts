import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { SharedMaterialModule } from './shared/shared-material.module';
//import { DocumentsModule } from './documents/documents.module';
import { ActionCenterComponent } from './actions/action-center/action-center.component';
import { DocumentsModule } from './documents/documents.module';
import { FullComponent } from './layout/full/full.component';
import { ActionCenterModule } from './actions/action-center.module';
import { AssetManagementComponent } from './asset-management/asset-management/asset-management.component';
import { AssetManagementModule } from './asset-management/asset-management.module';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesModule } from './employees/employees.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    SharedMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  exports: [SharedMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
