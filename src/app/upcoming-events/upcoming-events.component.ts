import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'HR-Policies-2024', UploadedOn: '01.01.20204', size: 13.6 },
  { name: 'HR-Policies-2023', UploadedOn: '01.01.20204', size: 13.6 },
  { name: 'HR-Policies-2024', UploadedOn: '01.01.20204', size: 13.6 },
];
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpcomingEventsComponent {
  // selected: Date | null | undefined;

  displayedColumns: string[] = ['name', 'UploadedOn', 'size', 'Action'];
  dataSource = ELEMENT_DATA;

  selected: Date = new Date();

  // Custom date class function to highlight holidays
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Add your holiday dates here
    const holidays = ['2023-06-20']; // Format: YYYY-MM-DD

    if (view === 'month') {
      const date = cellDate.toISOString().split('T')[0];
      return holidays.includes(date) ? 'holiday-date' : '';
    }
    return '';
  };
}
