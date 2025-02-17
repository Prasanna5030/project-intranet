import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent,
  },
  {
    path: 'pendingRequisitions',
    component: CareersComponent,
  },
  {
    path: 'jobOpenings',
    component: CareersComponent,
  },
  { path: 'job-details', component: JobDetailsComponent },
  { path: 'view-applications', component: ViewApplicationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
