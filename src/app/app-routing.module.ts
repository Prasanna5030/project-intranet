import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionCenterComponent } from './actions/action-center/action-center.component';
import { FullComponent } from './layout/full/full.component';
import { HomeComponent } from './layout/home/home.component';
import { AllHrPoliciesComponent } from './menu/hr-policies/all-hr-policies/all-hr-policies.component';
import { HrPoliciesComponent } from './menu/hr-policies/hr-policies.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
