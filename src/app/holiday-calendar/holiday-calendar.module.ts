import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidayCalendarComponent } from './holiday-calendar.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HolidayCalendarComponent,
  },
];
@NgModule({
  declarations: [HolidayCalendarComponent],
  imports: [
    CommonModule,
    HolidayCalendarRoutingModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
})
export class HolidayCalendarModule {}
