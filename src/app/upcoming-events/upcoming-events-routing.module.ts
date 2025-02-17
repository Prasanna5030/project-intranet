import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingEventsComponent } from './upcoming-events.component';

const routes: Routes = [
  {
    path: '',
    component: UpcomingEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingEventsRoutingModule {}
