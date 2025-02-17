import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrPoliciesComponent } from './hr-policies.component';
import { AllHrPoliciesComponent } from './all-hr-policies/all-hr-policies.component';

const routes: Routes = [
  { path: '', component : HrPoliciesComponent , children : [
    {
      path: 'all-hr-policies',
      component : AllHrPoliciesComponent 
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrPoliciesRoutingModule { }
