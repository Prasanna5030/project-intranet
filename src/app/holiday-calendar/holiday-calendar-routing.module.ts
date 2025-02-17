import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayCalendarComponent } from './holiday-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayCalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayCalendarRoutingModule {}
