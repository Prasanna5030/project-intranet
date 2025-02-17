import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PendingRequisitionsComponent } from './pending-requisitions/pending-requisitions.component';
import { HttpClientModule } from '@angular/common/http';
import { JobOpeningsComponent } from './job-openings/job-openings.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

const routes = [
  {
    path: '',
    component: CareersComponent,
  },
];

@NgModule({
  declarations: [
    CareersComponent,
    PendingRequisitionsComponent,
    JobOpeningsComponent,
    JobDetailsComponent,
    ViewApplicationsComponent,
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
  ],
})
export class CareersModule {}
