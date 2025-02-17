import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsComponent } from './upcoming-events.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';

const routes = [
  {
    path: '',
    component: UpcomingEventsComponent,
  },
];
@NgModule({
  declarations: [UpcomingEventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule
  ],
})
export class UpcomingEventsModule {}
