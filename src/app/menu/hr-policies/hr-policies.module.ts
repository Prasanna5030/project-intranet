import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrPoliciesRoutingModule } from './hr-policies-routing.module';
import { MatTableModule } from '@angular/material/table';
import { HrPoliciesComponent } from './hr-policies.component';
import { AllHrPoliciesComponent } from './all-hr-policies/all-hr-policies.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';


@NgModule({
  declarations: [HrPoliciesComponent , AllHrPoliciesComponent],
  imports: [
    CommonModule,
    HrPoliciesRoutingModule,
    SharedMaterialModule
  ]
})
export class HrPoliciesModule { }
