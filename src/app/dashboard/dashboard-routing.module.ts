import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', // Default route for DashboardModule
    component: DashboardComponent, // Render DashboardComponent
    children: [
      {
        path: '', // Default child route of /dashboard
        redirectTo: 'home', // Redirect to OverviewComponent
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule), // Lazy load HomeModule
      },

      {
        path: 'action-center',
        loadChildren: ()=> import('../actions/action-center.module').then((m)=>m.ActionCenterModule) 
      },
      {
        path: 'my-documents',
        loadChildren: ()=> import('../documents/documents.module').then((m)=>m.DocumentsModule)
      },
      {
        path : 'hr-policies',
        loadChildren: ()=> import('../menu/hr-policies/hr-policies.module').then((m)=>m.HrPoliciesModule)
      },
      {
        path: 'employees',
        loadChildren: ()=> import('../employees/employees.module').then((m)=>m.EmployeesModule)
      },
      {
        path: 'asset-management',
        loadChildren: ()=> import('../asset-management/asset-management.module').then((m)=> m.AssetManagementModule)
      },
      {
        path: 'upcoming-events',
        loadChildren: () =>
          import('../upcoming-events/upcoming-events.module').then(
            (m) => m.UpcomingEventsModule
          ),
      },
      {
        path: 'holiday-calendar',
        loadChildren: () =>
          import('../holiday-calendar/holiday-calendar.module').then(
            (m) => m.HolidayCalendarModule
          ),
      },
      {
        path : 'time-sheet',
        loadChildren: ()=> import('../timesheet/timesheet.module').then((m)=>m.TimeSheetModule)
      },
      {
        path: 'careers',
        loadChildren: () =>
          import('../careers/careers.module').then((m) => m.CareersModule),
      },

      {
        path : 'forms',
        loadChildren: ()=> import('../forms/form.module').then((m)=>m.FormModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
